import { useState } from "react";
import styles from "./Todo.module.css";

export const AddTodo = ({ makeNewTodo }) => {
  const [description, setDescription] = useState("");
  const [newTime, setNewTime] = useState("");

  const addNewTodo = (event) => {
    event.preventDefault();

    if (!description) return;

    const newTodo = {
      id: new Date(),
      title: description,
     // time: (newTime).split('-').reverse().join('.'),
     time: newTime,
      marked: false,
    };

    makeNewTodo(newTodo);
    setDescription("");
    setNewTime("");
  };

  return (
    <form action="" onSubmit={addNewTodo} className={styles.form}>
      <input
        type="text"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      ></input>
      <input
        type="date"
        onChange={(event) => setNewTime(event.target.value)}
        value={newTime}
      ></input>
      <button className={styles.addbtn} type="submit">
        Add
      </button>
    </form>
  );
};
