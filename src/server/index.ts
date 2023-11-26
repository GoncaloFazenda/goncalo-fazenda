import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getTest: publicProcedure.query(async () => {
    return { message: 'Hello from TRPC!' };
  }),
});

export type AppRouter = typeof appRouter;
