import React from 'react'
import Task from '../Components/Task'

const TaskContainer = (props) => {
    
    const renderTask = () => {
       return props.tasks.map((taskObj) =>  <Task key={taskObj.id} task={taskObj} category={taskObj.category} text={taskObj.text} deleteTask={props.deleteTask}/>)

    }
    return (
        <div class ="tasks" >
            <h5>Tasks</h5>
            {renderTask()}
        </div>
        ) 
        
    
}

export default TaskContainer