import { defineConfig } from "drizzle-kit";
import { configDotenv } from "dotenv";
import dotenvExpand from "dotenv-expand";

dotenvExpand.expand(configDotenv({ path: ".env.development" }));

export default defineConfig({
  dialect: "postgresql",
  schema: "./infra/database/models",
  out: "./infra/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  casing: "snake_case",
});
