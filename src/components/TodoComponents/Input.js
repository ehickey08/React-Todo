import React from 'react';

const Input = props => {
    return (
            <input placeholder ="...todo" value = {props.setValue} onChange = {props.handler} required = 'Fill this out' />    
    ); 
}

export default Input;