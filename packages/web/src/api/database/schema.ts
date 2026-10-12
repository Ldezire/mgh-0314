import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Quote / call-back requests submitted from the website form.
 * Stored here first so a lead is never lost if email delivery fails.
 */
export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  requirement: text("requirement"),
  emailed: integer("emailed", { mode: "boolean" }).notNull().default(false),
  emailError: text("email_error"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
