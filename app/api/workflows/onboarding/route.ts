import { serve } from "@upstash/workflow/nextjs";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { sendEmail } from "@/lib/workflow";

type UserState = "non-active" | "active";

type InitialData = {
  email: string;
  name: string;
};

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
const THREE_DAYS_IN_MS = 3 * ONE_DAY_IN_MS;
const THIRTY_DAYS_IN_MS = 30 * ONE_DAY_IN_MS;

const getUserState = async (email: string): Promise<UserState> => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) return "non-active";

  const lastActivityDate = new Date(user[0].lastActivityDate!);
  const now = new Date();
  const timeDifference = now.getTime() - lastActivityDate.getTime();

  if (
    timeDifference > THREE_DAYS_IN_MS &&
    timeDifference <= THIRTY_DAYS_IN_MS
  ) {
    return "non-active";
  }

  return "active";
};

export const { POST } = serve<InitialData>(async (context) => {
  const { email, name } = context.requestPayload;

  // Welcome Email
  await context.run("new-signup", async () => {
    await sendEmail({
      email,
      subject: "🚀 Welcome to Leos Exchange - Your Crypto Journey Begins!",
      message: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
        <h2 style="color: #22c55e;">Welcome to Leos Exchange, ${name}!</h2>
        <p style="color: #333;">We’re excited to have you on board. Leos Exchange is your gateway to fast, secure, and seamless cryptocurrency trading.</p>
        
        <h3 style="color: #22c55e;">Here’s what you can do next:</h3>
        <ul style="color: #333;">
          <li>💰 <strong>Deposit funds</strong> to start trading</li>
          <li>📊 <strong>Access real-time market insights</strong> for smart decisions</li>
          <li>🔐 <strong>Enjoy top-tier security</strong> for your assets</li>
        </ul>

        <p style="color: #333;">Click the button below to log in and explore:</p>
        <a href="https://leos-exchange.com/login" 
           style="display: inline-block; padding: 12px 20px; font-size: 16px; color: #fff; background-color: #22c55e; text-decoration: none; border-radius: 5px;">
          Get Started
        </a>

        <p style="color: #333;">If you have any questions, feel free to reach out to our support team at <a href="mailto:support@leos-exchange.com" style="color: #22c55e;">support@leos-exchange.com</a>.</p>

        <p>Happy Trading! 🚀</p>
        <p><strong>Leos Exchange Team</strong></p>
      </div>
    `,
    });
  });

  await context.sleep("wait-for-3-days", 60 * 60 * 24 * 3);

  while (true) {
    const state = await context.run("check-user-state", async () => {
      return await getUserState(email);
    });

    if (state === "non-active") {
      await context.run("send-email-non-active", async () => {
        await sendEmail({
          email,
          subject: "Are you still there?",
          message: `Hey ${name}, we miss you!`,
        });
      });
    } else if (state === "active") {
      await context.run("send-email-active", async () => {
        await sendEmail({
          email,
          subject: "Welcome back!",
          message: `Welcome back ${name}!`,
        });
      });
    }

    await context.sleep("wait-for-1-month", 60 * 60 * 24 * 30);
  }
});
