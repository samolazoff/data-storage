import React from 'react';
import './input.sass';

const Input = (props) => {
    return (
        <div className='box-input f-c'>
            <label htmlFor={props.id}>{props.nameLabel}</label>
            <input type={props.type} placeholder={props.placeholder} name={props.name} id={props.id}/>
        </div>
    );
};

export default Input;