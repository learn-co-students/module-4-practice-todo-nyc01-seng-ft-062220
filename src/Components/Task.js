import React from 'react'


class Task extends React.Component {
    render() {
        return(
            <div class="task">
                <div class="label">
                    {this.props.category}
                </div>
                <div class="text">
                    {this.props.text}
                </div>
                <button class="delete"  onClick={(task)=> this.props.deleteTask(this.props.task)}>
                    X
                </button>
            </div>
        )
    }
}

export default Task 