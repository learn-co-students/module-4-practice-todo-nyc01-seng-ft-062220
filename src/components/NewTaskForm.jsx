import React from 'react';

class NewTaskForm extends React.Component {

    state = {
        taskValue: "",
        selectValue: "Code"
    }

    setValuesonChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHelper = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state)
    }
    

    render() {
        return (
            <form className="new-task-form" onSubmit={this.submitHelper}>
                <input type="text" name="taskValue" value={this.state.taskValue} onChange={this.setValuesonChange}/>
                <select name="selectValue" value={this.state.selectValue} onChange={this.setValuesonChange}>
                    <option value="Code">Code</option>
                    <option value="Food">Food</option>
                    <option value="Money">Money</option>
                    <option value="Misc">Misc</option>
                </select>
                <input type="submit" value="Add task"/>
            </form>
        )
    }

}

export default NewTaskForm;