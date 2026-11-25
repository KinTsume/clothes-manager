import { timestamp } from "drizzle-orm/pg-core";

const DatabaseTimestamps = {
  updatedAt: timestamp<"string">().$onUpdate(() => {
    const date = new Date();
    return date.toLocaleString();
  }),
  createdAt: timestamp<"string">().defaultNow().notNull(),
  deletedAt: timestamp<"string">(),
};

export default DatabaseTimestamps;
