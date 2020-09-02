import React from 'react'
import Task from '../Components/Task'

class TaskContainer extends React.Component {
    render() {
        
        let renderTask = this.props.taskArray.map((taskObj) =>  <Task key={taskObj.id} task={taskObj} category={taskObj.category} text={taskObj.text}/>)
        return(
           
            <div class ="tasks">
                <h5>Tasks</h5>
                {/* {renderTask} */}
                {this.props.filterArray.length === 0 ? this.props.taskArray.map((taskObj) => <Task key={taskObj.id} task={taskObj} category={taskObj.category} text={taskObj.text}/>) : this.props.filterArray.map((taskObj) => <Task key={taskObj.id} task={taskObj} category={taskObj.category} text={taskObj.text}/>) }
            </div>
            
        )
    }
}

export default TaskContainer