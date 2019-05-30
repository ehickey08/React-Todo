import React from 'react';

const Input = props => {
    return (
        <input 
            placeholder = {props.placeholder}
            value = {props.setValue} 
            onChange = {props.handler} 
            required = {props.required}
            name = {props.name}
        />    
    ); 
}

export default Input;