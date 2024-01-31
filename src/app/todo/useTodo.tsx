import { useReducer, useState } from "react";

enum todoAction {
  ADD = "ADD",
  DELETE = "DELETE",
}

interface action {
  type: todoAction;
  payload: Partial<todos>;
}

interface todos {
  id: number;
  item: string;
}

const reducer = (todos: todos[], action: action) => {
  const lastTodoID = todos.length > 0 ? todos[todos.length - 1].id : 0;
  switch (action.type) {
    case todoAction.ADD:
      return [...todos, addTodo(lastTodoID, action.payload.item ?? "")];
    case todoAction.DELETE:
      return todos.filter((value) => value.id !== action.payload.id);
    default:
      return todos;
  }
};

const addTodo = (id: number, name: string) => {
  return {
    id: id + 1,
    item: name,
  };
};
const useTodo = () => {
  const [todos, dispatch] = useReducer(reducer, [] as todos[]);

  const [name, setName] = useState("");

  return {
    name,
    setName,
    todos,
    dispatch,
  };
};

export { useTodo, todoAction };
