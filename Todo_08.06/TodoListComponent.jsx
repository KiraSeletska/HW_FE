import React, { useState } from "react";
//import todos from "../todos.json";
import { TodoComponent } from "./TodoComponent";
import { AddTodo } from "./AddTodo";
import styles from "./Todo.module.css";

export const TodoListComponent = () => {
  const [todoList, setTodoList] = useState([]);

  const makeNewTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const deletTodo = (idDel) => {
    setTodoList(todoList.filter((el) => el.id !== idDel));
  };

  const doneTodo = (idDel) => {
    const changeTodo = todoList.find((el) => el.id === idDel);
    changeTodo.marked = !changeTodo.marked;
    setTodoList([...todoList]);
  };

const sortUp = () => {
}

const sortDown = () => {

}

  const showState = () => {
    console.log(todoList);
  };

  return (
    <div className={styles.form}>
      <button className={styles.stateBtn} onClick={showState}>State</button>
      <div className={styles.buttonMenu}>
      <button onClick={sortUp}>SortUp</button>
      <button onClick={sortDown}>sortDown</button>
      </div>
      <AddTodo makeNewTodo={makeNewTodo} />
      {todoList.map((el) => (
        <TodoComponent
          key={el.id}
          {...el}
          deletTodo={deletTodo}
          doneTodo={doneTodo}
        />
      ))}
    </div>
  );
};
