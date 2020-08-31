import React from 'react';

const Task = (props) => {

    const deleteTask = (e) => {
        props.removeTask(props.task)
    }

    return (
        <div className="task">
            <div className="label">{props.task.category}</div>
            <div className="text">{props.task.text}</div>
            <button className="delete" onClick={deleteTask}>X</button>
        </div>
    )
}

export default Task