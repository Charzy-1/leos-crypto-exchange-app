import { NextResponse } from "next/server";
import { db } from "@/database/drizzle";
import { passwordResetTokens, users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  const { token, password } = await request.json();

  try {
    const [tokenRecord] = await db
      .select()
      .from(passwordResetTokens)
      .where(eq(passwordResetTokens.token, token))
      .limit(1);

    if (!tokenRecord) {
      return NextResponse.json({ success: false, error: "Invalid or expired token." });
    }

    if (new Date() > tokenRecord.expiresAt) {
      return NextResponse.json({ success: false, error: "Token has expired." });
    }

    const hashedPassword = await hash(password, 10);

    await db
      .update(users)
      .set({ password: hashedPassword })
      .where(eq(users.id, tokenRecord.userId));

    return NextResponse.json({ success: true, message: "Password has been reset successfully." });

  } catch (error) {
    console.error("Error processing reset password:", error);
    return NextResponse.json({ success: false, error: "Internal server error" });
  }
}
