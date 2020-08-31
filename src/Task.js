import React from "react"

class Task extends React.Component {

    onClickHandler = () => {
        this.props.onClickDeleteHandler(this.props.task)
    }

    render() {
        return(
            <div className="task">
                <div className="label">{this.props.task.category}</div>
                <div className="text">{this.props.task.text}</div>
                <div className="delete" onClick={this.onClickHandler} style={{marginLeft: "100px", cursor: "pointer"}}>Delete</div>
            </div>
        )
    }
}

export default Task