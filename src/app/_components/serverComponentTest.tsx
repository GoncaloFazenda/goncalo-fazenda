import React from 'react';
import { serverClient } from '../_trpc/serverClient';

export default async function serverComponentTest() {
    const message = await serverClient.getUsers();

    return <div>{message.message}</div>;
}
