import React from 'react';
import './App.css';
import CategoryFilter from './Container/CategoryFilters'
import TaskList from './Container/TaskList'
import { CATEGORIES } from './data'
import NewTaskForm from './Component/NewTaskForm'

class App extends React.Component {

  state = {
    currentCategory: "All",    
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

  filterTask = () => {
    if (this.state.currentCategory === "All"){
      return this.state.tasks
    } else {
      return this.state.tasks.filter(taskObj => taskObj.category === this.state.currentCategory)
    }
  }

  updateCategory = (filterObj) => {
    this.setState({ currentCategory: filterObj})
  }

  addNewTask = (taskObj) => {
    this.setState({tasks: [...this.state.tasks, taskObj]})
  }

  removeTask = (taskObj) => {
    let newArray = this.state.tasks.filter(task => task.text !== taskObj.text)
    this.setState({tasks: newArray})
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilter categories={CATEGORIES} updateCategory={this.updateCategory} />
        <div className="tasks">
            <h5>Tasks</h5>
            <NewTaskForm addNewTask={this.addNewTask} />
            <TaskList tasks={this.filterTask()} removeTask={this.removeTask} />
        </div>
      </div>
    );
  }
}


export default App;
