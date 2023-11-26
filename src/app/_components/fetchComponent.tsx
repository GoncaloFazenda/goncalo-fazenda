'use client';

import { trpc } from '../_trpc/client';

export default function FetchComponent() {
  const getMessage = trpc.getTest.useQuery();
  return (
    <div>
      <h1>Fetch Component</h1>
      <p>{JSON.stringify(getMessage.data?.message)}</p>
    </div>
  );
}
