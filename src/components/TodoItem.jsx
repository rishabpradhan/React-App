import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  //here item is props destructured
  function del(item) {
    //console.log("items deleted for ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    //console.log(item.name, "clicked");
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    //console.log(todos)
  }
  const completedLine = item.done ? styles.completedLine : "";

  return (
    <div className={styles.item}>
      <div className={styles.items}>
        <span className={completedLine} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => del(item)} className={styles.delete}>
            del
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
