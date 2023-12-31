import type { Config } from 'drizzle-kit';

if (!process.env.DATABASE_HOST) {
    console.error('process.env.DATABASE_HOST not set');
} else if (!process.env.DATABASE_DB) {
    console.error('process.env.DATABASE_DB not set');
} else if (!process.env.DATABASE_USER) {
    console.error('process.env.DATABASE_USER not set');
}

export default {
    schema: './src/db/schema.ts',
    out: './drizzle',
    driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        host: process.env.DATABASE_HOST!,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DB!,
    },
} satisfies Config;
