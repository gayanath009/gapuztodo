import styles from "./TodoItem.module.css";

export default function Todoitem({ item, todoLists, setTodoLists }) {
  function handleDelete(item) {
    setTodoLists(todoLists.filter((todo) => todo !== item));
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        {" "}
        {item}
        <span className={styles.delete}>
          <button onClick={() => handleDelete(item)}>X</button>
        </span>
      </div>

      <hr className={styles.line}></hr>
    </div>
  );
}
