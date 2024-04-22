import React from 'react';

// Object Destructuring
const student = {
    name: "cubi", 
    age: 20
}
const {name, age} = student;


const Cell = ({value, onClick, className}) => {
    return (
        <div className={`game-cell ${className}`} onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;