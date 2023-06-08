import React from 'react'
import styles from './Todo.module.css'


export const TodoComponent = ({id, title, marked, doneTodo, deletTodo}) => {

  return (
    <div className={!marked ? styles.todo : styles.done}>
      <input type="checkbox" checked={marked} onChange={()=>doneTodo(id)}></input>
      <span>{title}</span>
      <button className={styles.deletBtn} onClick={()=>deletTodo(id)}>Delet </button>
    </div>
  )
}
