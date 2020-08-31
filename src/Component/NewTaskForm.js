import React from 'react';

class NewTaskForm extends React.Component {
    
    state = {
        text: "",
        category: "Code"
    }

    inputHandler = (e) => {
        this.setState({text: e.target.value})
    }

    optionHandler = (e) => {
        this.setState({category: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addNewTask(this.state)
    }

    render(){
        return (
            <form className="new-task-form" onSubmit={this.submitHandler}>
                <input placeholder="New task details" value={this.state.text} type="text" onChange={this.inputHandler}/>
                <select onChange={this.optionHandler} >
                    <option value="Code">Code</option>
                    <option value="Food">Food</option>
                    <option value="Money">Money</option>
                    <option value="Misc">Misc</option>
                </select>
                <input type="submit" value="Add task" />
            </form>
        )
    }
}

export default NewTaskForm