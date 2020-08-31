import React from 'react';
import Task from '../components/Task';
import NewTaskForm from '../components/NewTaskForm';

class TaskContainer extends React.Component {

    state = {
        tasks: [
            {
              text: 'Buy rice',
              category: 'Food'
            },
            {
              text: 'Save a tenner',
              category: 'Money'
            },
            {
              text: 'Build a todo app',
              category: 'Code'
            },
            {
              text: 'Build todo API',
              category: 'Code'
            },
            {
              text: 'Get an ISA',
              category: 'Money'
            },
            {
              text: 'Cook rice',
              category: 'Food'
            },
            {
              text: 'Tidy house',
              category: 'Misc'
            }
          ]
    }

    createTask = ({taskValue, selectValue}) => {
        let text = taskValue, category = selectValue;
        let newTaskObj = {text: text, category: category}
        console.log(newTaskObj)
        let newArr = [...this.state.tasks, newTaskObj]
        console.log(newArr)
        this.setState({tasks: newArr}, ()=> console.log("Container State:", this.state))
    }

    deleteTask = (taskObj) => {
        let newTaskArr = this.state.tasks.filter(task => task.text !== taskObj.text);

        this.setState({tasks: newTaskArr});
    }

    renderAllTasks = () => {
      return this.state.tasks.map((taskObj => <Task task={taskObj} deleteHandler={this.deleteTask}/>))
    }

    filteredByCategory = () => {
      return this.state.tasks.filter((taskObj => taskObj.category === this.props.selectedCategory))

    }

    renderFilteredTasks = () => {
      return this.filteredByCategory().map((taskObj => <Task task={taskObj} deleteHandler={this.deleteTask}/>))
    }

    render() {
        return (
            <div className="tasks">
                <h5>Tasks</h5>
                <NewTaskForm submitHandler={this.createTask} />
                {this.props.selectedCategory === "All" ? this.renderAllTasks() : this.renderFilteredTasks()}
            </div>
        );
    };
}

export default TaskContainer;