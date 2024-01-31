"use client";

import React from "react";
import { useTodo, todoAction } from "./useTodo";

const Todo = () => {
  const { name, setName, todos, dispatch } = useTodo();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: todoAction.ADD, payload: { item: name } });
    setName("");
  };

  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleRemoveItem = (id: number) => {
    dispatch({
      type: todoAction.DELETE,
      payload: {
        id: id,
      },
    });
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-2xl rounded-lg p-4 w-[800px] h-[900px] flex flex-col gap-4">
        <h1 className="self-center">Simple To do List</h1>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="flex flex-rows gap-2 justify-center"
        >
          <input
            className="outline-1 border border-gray-600 rounded-lg w-56 px-2"
            type="text"
            value={name}
            onChange={(event) => handleOnInput(event)}
            name=""
            id=""
          />
          <button className="bg-slate-700 py-2 px-4 rounded-xl text-white">
            submit
          </button>
        </form>
        <ul className="flex flex-col gap-4">
          {todos.map((value, index) => {
            return (
              <li key={index} className="flex flex-row items-center gap-10">
                <div className="text-xl font-bold">
                  <span>{value.id}.</span> {value.item}
                </div>
                <button
                  className="bg-red-700 py-2 px-4 rounded-xl text-white"
                  onClick={() => handleRemoveItem(value.id)}
                >
                  Remove Item
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
