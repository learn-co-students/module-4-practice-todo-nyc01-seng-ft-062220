import React from 'react'
import Task from '../Components/Task'
import TaskForm from '../Components/TaskForm'

class TaskContainer extends React.Component {

    mapFilteredTasks = () => {

        let filteredTasks = this.props.tasks

        if(this.props.selectedCategory !== "All") {
            filteredTasks = this.props.tasks.filter(task => {
                return (
                    task.category === this.props.selectedCategory
                )
            })
        } 

        return (filteredTasks.map((task,index) => {
            return(
                <Task key={index} task={task}/>
            )
        }))
    }

    render () {
        return (
            <div className="tasks">
                <TaskForm addTask={this.props.addTask} categories={this.props.categories}/>
                <h5>Tasks</h5>
                <div>
                    {this.mapFilteredTasks()}
                </div>
            </div>
        )
    }
}

export default TaskContainer 