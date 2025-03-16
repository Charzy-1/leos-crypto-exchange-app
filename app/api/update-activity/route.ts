import { NextResponse } from "next/server";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "User ID required" }, { status: 400 });
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (user[0].lastActivityDate === new Date().toISOString().slice(0, 10)) {
    return NextResponse.json({ message: "Already updated" });
  }

  await db
    .update(users)
    .set({ lastActivityDate: new Date().toISOString().slice(0, 10) })
    .where(eq(users.id, userId));

  return NextResponse.json({ message: "Activity updated" });
}
