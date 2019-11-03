import React from 'react';
import Classes from './Button.css'
const Button = (props) => {
    return (
        
            <button 
            className={[Classes.Button,Classes[props.btnType]].join(' ')}
            onClick={props.eventHandler}>
                {props.children}
            </button>
    )
}

export default Button;