import { NextResponse } from "next/server";
import { db } from "@/database/drizzle";
import { passwordResetTokens } from "@/database/schema";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { randomBytes } from "crypto";
import { add } from "date-fns";
import nodemailer from "nodemailer";

// Create a transporter using your Gmail credentials
const transporter = nodemailer.createTransport({
  service: "gmail", // Gmail service
  auth: {
    user: process.env.EMAIL_USER, // Your email (e.g., pamphilemkp@gmail.com)
    pass: process.env.EMAIL_PASSWORD, // Your email password
  },
});

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    // Look up the user by email
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user) {
      return NextResponse.json({
        message: "If an account exists, a reset email has been sent.",
      });
    }

    const token = randomBytes(32).toString("hex");
    const expiresAt = add(new Date(), { hours: 1 });

    // Save the token
    await db.insert(passwordResetTokens).values({
      userId: user.id,
      token,
      expiresAt,
    });

    const resetLink = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/reset-password?token=${token}`;

    // Send the reset email using Nodemailer
    const mailOptions = {
      from: process.env.EMAIL_USER, // Your email address
      to: email, // Recipient email address
      subject: "Password Reset Request",
      html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password. This link expires in 1 hour.</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "If an account exists, a reset email has been sent.",
    });
  } catch (error) {
    console.error("Error processing forgot password:", error);
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
}
