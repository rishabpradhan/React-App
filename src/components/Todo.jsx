import Heading from "./Heading";
import ListWork from "./ListWorks";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
import styles from "./todo.module.css";

export default function Todo() {
  // const [todos, setTodos] = useState([]); // useState array to store list of todo works
  const [todos, setTodos] = useState([]);
  const totalTodos = todos.length;
  const CompletedTodo = todos.filter((todo) => todo.done).length;
  return (
    <div>
      {/* Heading 1 */}
      <Heading />

      {/* creating form inputs */}
      <Form todos={todos} setTodos={setTodos} />

      {/* Heading 2 */}
      <ListWork />

      <TodoList todos={todos} setTodos={setTodos} />
      <div className={styles.all}>
        <span className={styles.sum}>Total Todos:{totalTodos}</span>
        <span className={styles.select}>Completed Todos:{CompletedTodo}</span>
      </div>
    </div>
  );
}
