import { publicProcedure, router } from './trpc';
import { drizzle } from 'drizzle-orm/postgres-js';
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as schema from '@/db/schema';
import postgres from 'postgres';
import { z } from 'zod';
import dotenv from 'dotenv';
dotenv.config();

// Schemas in use
const { users } = schema;

if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL env var is not set');
}

// Drizzle runs migrations only if needed ( ex: first run to ensure tables exist )
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient), ...)

// Drizzle ORM query client setup
const queryClient = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryClient, { schema });

export const appRouter = router({
    getUsers: publicProcedure.query(async () => {
        return await db.select().from(users);
    }),
    addUser: publicProcedure.input(z.string()).mutation(async (params) => {
        const { input } = params;
        await db.insert(users).values({ name: input });
        return true;
    }),
});

export type AppRouter = typeof appRouter;
