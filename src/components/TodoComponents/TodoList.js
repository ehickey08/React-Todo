import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        props.person.map(item => {
            return <Todo item = {item} complete = {props.complete} />
        })
    );
}

export default TodoList;