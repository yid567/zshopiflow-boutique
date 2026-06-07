// Database is optional - the app works without it
let pool: any = null;
let db: any = null;

try {
  if (process.env.DATABASE_URL) {
    const { drizzle } = require("drizzle-orm/node-postgres");
    const { Pool } = require("pg");

    const globalForDb = globalThis as typeof globalThis & {
      __arenaNextJsPostgresqlPool?: any;
    };

    pool = globalForDb.__arenaNextJsPostgresqlPool ?? new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    if (process.env.NODE_ENV !== "production") {
      globalForDb.__arenaNextJsPostgresqlPool = pool;
    }

    db = drizzle(pool);
  }
} catch (error) {
  console.log("Database not configured - auth features disabled");
}

export { db, pool };