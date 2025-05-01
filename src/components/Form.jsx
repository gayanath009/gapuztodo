import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todoLists, setTodoLists }) {
  const [todoList, setTodoList] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = e.target[0].value;
    if (newTodo) {
      setTodoLists([...todoLists, newTodo]);
      setTodoList("");
      console.log(todoLists);
    }
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add a new task"
          value={todoList}
          onChange={(e) => setTodoList(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
