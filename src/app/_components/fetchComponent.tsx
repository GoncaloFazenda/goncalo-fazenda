'use client';
import { useState } from 'react';
import { trpc } from '../_trpc/client';

export default function FetchComponent() {
    const [name, setName] = useState<string>('');
    const getList = trpc.getUsers.useQuery();
    const addUser = trpc.addUser.useMutation();
    const deleteAllUsers = trpc.deleteAllUsers.useMutation();

    return (
        <div>
            <h1>getList Error goes under this</h1>
            {getList.isError && <h1 className=" text-3xl text-red-500">{JSON.stringify(getList.error)}</h1>}
            <h1>& above this</h1>
            <br />
            <div className="flex flex-col space-y-8 ">
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <button
                    className=" p-4 bg-red-400 rounded-2xl border-2 border-white text-lg"
                    onClick={() => addUser.mutate(name)}
                >
                    Add user
                </button>
            </div>
            <br />
            <p className="text-blue">list: {JSON.stringify(getList.data)}</p>
            <br />
            <p className="text-white">last name submited: {addUser.data && JSON.stringify(addUser.data)}</p>
            <br />
            <button className=" p-4 bg-red-400 rounded-2xl border-2 border-white text-lg" onClick={() => deleteAllUsers.mutate()}>
                Delete all
            </button>
        </div>
    );
}
