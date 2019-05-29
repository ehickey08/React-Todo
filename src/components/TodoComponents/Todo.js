import React from 'react';
import './Todo.scss'
const Todo = props => {
    const className = props.item.completed && "completed" 
    return <div className = {`todo-item ${className}`} id={props.item.id} onClick = {() => props.complete(props.item.id)}>{props.item.task}</div>
}

export default Todo;

