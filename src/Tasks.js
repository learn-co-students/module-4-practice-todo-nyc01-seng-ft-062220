import React from "react"
import All from "./All";

class Tasks extends React.Component {

    renderTasks = (filter) => {

        if (filter === "All") {
            return this.props.data.map(task => <All task={task}/>)
        } else {
            let newArray = this.props.data.filter(item => item.category === filter)
            return newArray.map(task => <All task={task}/>)
        }
    }

    render() {
        console.log(this.props.filter)
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