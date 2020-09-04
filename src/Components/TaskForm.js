import React from 'react'
import { CATEGORIES } from '../data'


class TaskFormm extends React.Component {

    state = {
        task: '',
        category: CATEGORIES[1]
    }

    submitHandler = (e) => {
        e.preventDefault()
        let inputTask = {
            text: this.state.task,
            category: this.state.category
        }
         this.props.addTask(inputTask)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    selectCategory = () => {
        let arr = CATEGORIES.filter(category => category!=='All')
        return arr.map(category => <option key={category}>{category}</option>)
    }
    render() {
        console.log(this.selectCategory())
        return(
            <form className="new-task-form" onSubmit={e => this.submitHandler(e)}>
                <input onChange={e => this.changeHandler(e)} name="task" value={this.state.task} placeholder="Enter a New Task" type="text" />
                <select onChange={e => this.changeHandler(e)} name="category" value={this.state.category}>
                    {this.selectCategory()}
                    </select>
                    <input type="submit" />
            </form>
        )
    }
}

export default TaskFormm