import React, { useState } from "react";
import { TodoComponent } from "./TodoComponent";
import { AddTodo } from "./AddTodo";
import { Frazes } from "../Frazes/Frazes";
import styles from "./Todo.module.css";

export const TodoListComponent = () => {
  const [todoList, setTodoList] = useState([]);
  const [state, setState] = useState(false);
  const [sortTodoUp, setSortTodoUp] = useState([]);
  const [sortedTime, setSortedTime] = useState([]);
  const [stateTime, setStateTime] = useState(false);


  const makeNewTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const deletTodo = (idDel) => {
    setTodoList(todoList.filter((el) => el.id !== idDel));
  };

  const doneTodo = (idDone) => {
    const changeTodo = todoList.find((el) => el.id === idDone);
    changeTodo.marked = !changeTodo.marked;
    setTodoList([...todoList]);
  };

  const deletAll = () => {
    setTodoList([]);
  };

  const sortUp = () => {
    const arr = todoList;
    const sortArr = arr.filter((el) => el.marked);
    setState(true);
    setSortTodoUp([...sortArr]);
  };

  const sortDown = () => {
    const arr = todoList;
    const sortArr = arr.filter((el) => !el.marked);
    setState(true);
    setSortTodoUp([...sortArr]);
  };

  const clearSort = () => {
    setState(false);
    setTodoList([...todoList]);
  };

  const showState = () => {
    console.log(todoList);
  };
  const sortTime = () => {
    const arr = todoList;
    const newArr = arr.sort((a, b) => {
      let dateA = new Date(a.time);
      let dateB = new Date(b.time);
      return dateA - dateB;
    });
    setSortedTime([...newArr]);
  };

  return (
    <div className={styles.formWraper}>
      <button className={styles.stateBtn} onClick={showState}>
        State
      </button>

      <Frazes />

      <AddTodo makeNewTodo={makeNewTodo} />

      <div className={styles.buttonMenu}>
        <button onClick={sortTime}>sortTime</button>
        <button onClick={sortUp}>SortUp</button>
        <button onClick={sortDown}>sortDown</button>
        <button onClick={clearSort}>clearSort</button>
        <button onClick={deletAll}>deletAll</button>
      </div>

      {(!state ? todoList : sortTodoUp).map((el) => (
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
