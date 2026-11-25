import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export const client = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const database = drizzle({
  client: client,
  casing: "snake_case",
});
