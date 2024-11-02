import { useState } from "react";
import { useEffect } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", completed: "false" });

  const handlechange = (event) => {
    setTodo({ name: event.target.value, done: false }); //captures the text entered in the input field every time the user types or edits, enabling you to dynamically manage and store user input.
  };
  function handlesubmit(event) {
    event.preventDefault(); //prevent from default refreshing of page when submit button is clicked
    //if (todo.trim() !== "") {
    // avoid adding empty todo
    setTodos([...todos, todo]); // spread operator retain the previous todo value and add new value to todos
    setTodo({ name: "", done: "false" }); // clear the input after submission
  }
  // useEffect hook is used to prevent duplicate entries of list of todos.
  useEffect(() => {
    //console.log(todos);
  }, [todos]);
  return (
    <div className={styles.middle}>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          onChange={handlechange}
          value={todo.name}
          className={styles.todoinput}
          placeholder="Enter an item.."
        />
        <button type="submit" className={styles.btn}>
          Add
        </button>
      </form>
    </div>
  );
}
