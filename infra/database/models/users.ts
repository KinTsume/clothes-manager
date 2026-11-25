import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import DatabaseTimestamps from "@/infra/timestamps";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: varchar({ length: 254 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  ...DatabaseTimestamps,
});
