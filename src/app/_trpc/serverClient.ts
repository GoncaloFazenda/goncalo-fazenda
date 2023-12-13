import { httpBatchLink } from '@trpc/client';

import { appRouter } from '@/server';

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: 'https://goncalo-fazenda-mq63rfxz2-goncalos-projects-4c0e583e.vercel.app/api/trpc',
    }),
  ],
});
