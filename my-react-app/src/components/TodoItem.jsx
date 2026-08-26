import styles from "../styles/TodoItem.module.css";

function TodoItem({ task, index, removeTask }) {
  return (
    <div className={styles.item}>
      <span>{task}</span>
      <button onClick={() => removeTask(index)}>Remove</button>
    </div>
  );
}

export default TodoItem;
