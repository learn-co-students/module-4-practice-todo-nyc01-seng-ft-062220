import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import CategoryContainer from './Containers/CategoryContainer'
import TaskContainer from './Containers/TaskContainer'

class App extends React.Component {

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
    ],
    categories: CATEGORIES,
    selectedCategory: CATEGORIES[0]
  }

  addTask = (formData) => {
    const taskObj = {
      text:formData.text,
      category: formData.selectedCategory
    }
    this.setState({tasks:[...this.state.tasks,taskObj]})
  }

  clickHandler = (event) => {
    this.setState({selectedCategory : event.target.value})
  }


  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryContainer categories={this.state.categories} selectedCategory={this.state.selectedCategory}  clickHandler={this.clickHandler}/>
        <TaskContainer addTask={this.addTask} categories={this.state.categories} selectedCategory={this.state.selectedCategory} tasks={this.state.tasks}/>
      </div>
    );
  }
}


export default App;
