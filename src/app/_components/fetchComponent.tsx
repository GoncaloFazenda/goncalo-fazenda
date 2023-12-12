'use client';
import { trpc } from '../_trpc/client';

export default function FetchComponent() {
    const getMessage = trpc.getUsers.useQuery();
    const addUser = trpc.addUser.useMutation();
    getMessage.isError && console.log(getMessage.error);

    return (
        <div>
            <h1>Fetch Component</h1>
            <p>{JSON.stringify(getMessage.data)}</p>
            {getMessage.isError && <h1 className=" text-3xl text-red-500">{JSON.stringify(getMessage.error)}</h1>}
            <button onClick={() => addUser.mutate('fazenda')}>Add user</button>
            <p>{JSON.stringify(addUser.data)}</p>
        </div>
    );
}
