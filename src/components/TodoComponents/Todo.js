import React from 'react';
import './Todo.scss'


const Todo = props => {
    const classAddOn = props.item.completed && 'completed';
    const matcher = !props.item.matching && 'unmatched';
    return( 
        <div 
            className = {`todo-checkbox ${classAddOn} ${matcher}`} 
            id={props.item.id} 
            onClick = {() => props.complete(props.item.id)}
        >
        {props.item.task}
        </div>
    );
}

export default Todo;

