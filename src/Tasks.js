import React from "react"
import Task from "./Task";

class Tasks extends React.Component {

    renderTasks = (filter) => {

        if (filter === "All") {
            return this.props.data.map(task => <Task task={task} onClickDeleteHandler={this.props.onClickDeleteHandler}/>)
        } else {
            let newArray = this.props.data.filter(item => item.category === filter)
            return newArray.map(task => <Task task={task}/>)
        }
    }

    render() {
        return(
            <div className="tasks">
                <h5>Tasks</h5>
                <>
                    {this.renderTasks(this.props.filter)}
                </>
            </div>

        )
    }
}

export default Tasks