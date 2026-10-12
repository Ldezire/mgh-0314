import { Resend } from "resend";

const FROM = process.env.LEAD_FROM_EMAIL || "Mangalathu Glass House <onboarding@resend.dev>";

export const LEAD_RECIPIENTS = (
  process.env.LEAD_TO_EMAILS || "ramesh.s.mangalath@gmail.com,manmadhan.manoj@gmail.com"
)
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);

interface SendEmailOptions {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

/**
 * Sends a transactional email through Resend.
 * Throws when the API key is missing or the provider rejects the send —
 * callers decide how to degrade.
 */
export async function sendEmail({ to, subject, html, text, replyTo }: SendEmailOptions) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: FROM,
    to,
    subject,
    html,
    text,
    replyTo,
  });

  if (error) throw new Error(`Email failed: ${error.message}`);
  return data;
}
