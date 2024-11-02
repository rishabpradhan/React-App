import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const duplicatetodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todolist}>
      {" "}
      {duplicatetodos.map(
        (
          item // mapping over todos array
        ) => (
          <TodoItem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          /> // using TodoItem componet to render list of work dynamically
          //evey item in list is aasociated with unique identifer key which vakue is equal to todo
        )
      )}
    </div>
  );
}
