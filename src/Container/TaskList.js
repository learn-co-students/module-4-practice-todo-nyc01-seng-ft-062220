import React from 'react';
import Task from '../Component/Task'

const TaskList = (props) => {
    
    const renderTasks = () => {
        return props.tasks.map(taskObj => <Task key={taskObj.text} task={taskObj} removeTask={props.removeTask} />)
    }
    
    return renderTasks()
}

export default TaskList;