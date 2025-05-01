import Todoitem from "./TodoItem";
import styles from "./TodoList.module.css";
export default function TodoList({ todoLists, setTodoLists }) {
  return (
    <div className={styles.list}>
      {todoLists.map((item) => (
        <Todoitem
          key={item}
          item={item}
          todoLists={todoLists}
          setTodoLists={setTodoLists}
        /> // Pass the item as a prop to Todoitem
      ))}
    </div>
  );
}
