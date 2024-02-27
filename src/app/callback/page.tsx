"use client";

import { useCallback, useState } from "react";
import { shuffle } from "@/app/utils";
import Search from "./search";

const allUsers = ["john", "alex", "george", "simon", "james"];

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [users, setUsers] = useState(allUsers);
  const [counter, setCounter] = useState(0);

  const handleSearch = (text: string) => {
    console.log(users[0]);

    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>{counter}</h1>
      <div className="align-center mb-2 flex flex-row gap-2">
        <button
          className="p-4 bg-red-500 text-white rounded-xl w-[200px]"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
