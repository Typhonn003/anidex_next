import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/app/db/schemas",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: process.env.DATABASE_URL! },
});
