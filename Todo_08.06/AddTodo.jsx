import { useState } from "react";
import styles from "./Todo.module.css";

export const AddTodo = ({ makeNewTodo }) => {
  const [description, setDescription] = useState("");

  const addNewTodo = (event) => {
    event.preventDefault();

    if(!description) return;

    const newTodo = {
      id: new Date,
      title: description,
      marked: false,
    };

    makeNewTodo(newTodo);
    setDescription("");
  };

  return (
    <form action="" onSubmit={addNewTodo} className={styles.form}>
      <input
        type="text"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      ></input>
      <button className={styles.addbtn} type="submit">Add</button>
    </form>
  );
};
