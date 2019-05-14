import React from 'react';

export default props=>(
    <>
        <div 
            onClick={props.toggleCompleted}
            style={{ textDecoration: props.todo.complete ? 'line-through' : " "}}
        >
            {props.todo.text}
        </div>
        <button onClick={props.onDeleteTodo}>
            X
        </button>
    </>
    
)