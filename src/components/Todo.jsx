import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo({}) {
  const [todoLists, setTodoLists] = useState([]);
  return (
    <>
      <Form todoLists={todoLists} setTodoLists={setTodoLists} />
      <TodoList todoLists={todoLists} setTodoLists={setTodoLists} />
    </>
  );
}
