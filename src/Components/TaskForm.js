import React from 'react'

class TaskForm extends React.Component {

    state = {
        text: "",
        value: "Code"
    }

    changeHandler = (event) => {
        this.setState({text:event.target.value})
    }

    dropDownHandler = (event) => {
        this.setState({value:event.target.value})
    }

    createDropdown = () => {
        
        const filteredArray = this.props.categories.filter(category => {
            return (
                category !== "All"
            )
        })

        return(
            filteredArray.map(category => {
                return (
                    <option key={category} value={category}>{category}</option>
                )
            })
        )
    }

    submitHandler = (event) => {
        event.preventDefault()

        let formData = {
            text : this.state.text,
            selectedCategory:this.state.value
        }
        this.props.addTask(formData)

        this.setState({text:""})
    }

    render () {
        return (

                <form className="new-task-form" onSubmit={event => this.submitHandler(event)}>
                    <input placeholder="New-task-details" type="text" onChange={event => this.changeHandler(event)} value={this.state.text}></input>
                    <select className="categories"  onChange={this.dropDownHandler} value={this.state.value}>
                        {this.createDropdown()}
                    </select>
                    <input type="submit" value="Add-task"></input>
                </form>

        )
    }
}

export default TaskForm