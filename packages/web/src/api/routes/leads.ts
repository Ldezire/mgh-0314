import { z } from "zod";
import { eq } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";
import { LEAD_RECIPIENTS, sendEmail } from "../services/email";

const leadInput = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+0-9()\s-]+$/, "Please enter a valid phone number"),
  requirement: z.string().trim().max(1500).optional(),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const leads = {
  create: base.input(leadInput).handler(async ({ input }) => {
    const [lead] = await db
      .insert(schema.leads)
      .values({
        name: input.name,
        email: input.email,
        phone: input.phone,
        requirement: input.requirement || null,
      })
      .returning();

    const requirement = input.requirement?.trim() || "(no details given)";
    const text = [
      "New quote request from the website",
      "",
      `Name: ${input.name}`,
      `Phone: ${input.phone}`,
      `Email: ${input.email}`,
      "",
      "Requirement:",
      requirement,
    ].join("\n");

    const html = `
      <div style="font-family:Helvetica,Arial,sans-serif;color:#1A1C19;line-height:1.55">
        <p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#1F4436;margin:0 0 8px">
          New quote request
        </p>
        <h2 style="margin:0 0 20px;font-size:20px">Mangalathu Glass House — website form</h2>
        <table cellpadding="0" cellspacing="0" style="font-size:15px">
          <tr><td style="padding:4px 16px 4px 0;color:#5E635C">Name</td><td><strong>${escapeHtml(input.name)}</strong></td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#5E635C">Phone</td><td><a href="tel:${escapeHtml(input.phone)}">${escapeHtml(input.phone)}</a></td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#5E635C">Email</td><td><a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></td></tr>
        </table>
        <p style="margin:20px 0 6px;color:#5E635C;font-size:13px">Requirement</p>
        <p style="margin:0;white-space:pre-wrap;padding:14px 16px;background:#F7F4EE;border-left:3px solid #1F4436">${escapeHtml(requirement)}</p>
        <p style="margin:24px 0 0;font-size:13px;color:#5E635C">
          Reply to this email to answer ${escapeHtml(input.name)} directly.
        </p>
      </div>`;

    try {
      await sendEmail({
        to: LEAD_RECIPIENTS,
        subject: `Quote request — ${input.name} (${input.phone})`,
        text,
        html,
        replyTo: input.email,
      });
      if (lead) {
        await db
          .update(schema.leads)
          .set({ emailed: true, emailError: null })
          .where(eq(schema.leads.id, lead.id));
      }
      return { ok: true as const, delivered: true as const };
    } catch (error) {
      const message = error instanceof Error ? error.message : "unknown email error";
      console.error("lead email failed:", message);
      if (lead) {
        await db
          .update(schema.leads)
          .set({ emailed: false, emailError: message })
          .where(eq(schema.leads.id, lead.id));
      }
      // The lead is saved — the visitor still gets a success state.
      return { ok: true as const, delivered: false as const };
    }
  }),
};
