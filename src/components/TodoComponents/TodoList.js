import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        props.items.map(item => {
            return <Todo className = "todo-item" item = {item} complete = {props.complete} />
        })
    );
}

export default TodoList;