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
            </div>
        )
    }
}

export default Task 