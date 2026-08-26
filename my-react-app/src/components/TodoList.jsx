import TodoItem from "./TodoItem";

function TodoList({ tasks, removeTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
