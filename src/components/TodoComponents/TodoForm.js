import React from 'react';
import Input from './Input';
import AddButton from './AddButton';
import ClearButton from './ClearButton';

const TodoFrom = props => {
    return (
        <form onSubmit = {props.addFunc}>
            <Input handler = {props.handler} setValue = {props.setValue} error = {props.error}/>
            <AddButton addFunc = {props.addFunc} />
            <ClearButton />
        </form>
    );
}

export default TodoFrom;