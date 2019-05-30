import React from 'react';
import Input from './Input';
import AddButton from './AddButton';
import ClearButton from './ClearButton';

const TodoFrom = props => {
    return (
        <form onSubmit = {props.addFunc}>
            <Input 
                handler = {props.handler} 
                setValue = {props.taskValue} 
                error = {props.error}
                placeholder = "New to-do task..."
                required = 'Fill this out'
                name = 'task'
            />
            <Input
                placeholder = "Search your tasks..."
                setValue = {props.searchValue}
                handler = {props.handler}
                name = 'search'
            />
            <AddButton addFunc = {props.addFunc} />
            <ClearButton removeFunc = {props.removeFunc}/>
        </form>
    );
}

export default TodoFrom;