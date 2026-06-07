import { pgTable, serial, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 200 }).notNull().unique(),
  password: varchar("password", { length: 300 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
