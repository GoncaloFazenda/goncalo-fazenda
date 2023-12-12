import { publicProcedure, router } from './trpc';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
// import * as schema from '@/db/schema';
import postgres from 'postgres';
import { z } from 'zod';
// Schemas in use
// const { users } = schema;

if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL env var is not set');
}

const queryClient = postgres(process.env.DATABASE_URL!, { max: 1 });
const db = drizzle(queryClient);

// Drizzle pushes the already generated migrations to the database only if needed. Note:(this will throw an error if the ./drizzle/meta/_journal.json file does not exist)
migrate(db, { migrationsFolder: 'drizzle' });

export const appRouter = router({
    getUsers: publicProcedure.query(async () => {
        // return await db.select().from(users);
        return { message: 'Hello World' };
    }),
    addUser: publicProcedure.input(z.string()).mutation(async (params) => {
        const { input } = params;
        // await db.insert(users).values({ name: input });
        return input;
    }),
});

export type AppRouter = typeof appRouter;
