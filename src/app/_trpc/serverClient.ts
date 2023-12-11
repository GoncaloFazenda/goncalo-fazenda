import { httpBatchLink } from '@trpc/client';
import { appRouter } from '@/server';

let baseURL = process.env.NEXT_PUBLIC_BASEURL;
if (process.env.NODE_ENV === 'development') baseURL = 'http://localhost:3000';

export const serverClient = appRouter.createCaller({
    links: [
        httpBatchLink({
            url: `${baseURL}/api/trpc`,
        }),
    ],
});
