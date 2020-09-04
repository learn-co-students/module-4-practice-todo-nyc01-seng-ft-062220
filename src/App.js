import React from 'react';
import './App.css';
import Category from './Containers/Category'
import TaskContainer from './Containers/TaskContainer'

class App extends React.Component {

  state = {
    selectedCategory: "All",    
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

  filterTasks = () => {
    if (this.state.selectedCategory === 'All') {
      return this.state.tasks
    }else {
      return this.state.tasks.filter(taskObj => taskObj.category === this.state.selectedCategory)
    }
  }

  selectedCategory = (e) => {
    let select = e.target.innerText
    console.log(e.target)
    // this.selectedArray()
    this.setState({selectedCategory: select })
  }



  deleteTask = (obj) => {
    // console.log("clicked")
    // console.log(obj)
    let newArr = this.state.tasks.filter(task => !(task.text === obj.text && task.category === obj.category))
    this.setState({tasks: newArr})
  }

  
  
  render() {
    
    return (
      <div className="App">
        <h2>My tasks</h2> 
        <Category selectedState ={this.state.selectedCategory} selectedCategory ={this.selectedCategory} />    
        <TaskContainer  deleteTask={this.deleteTask} category={this.state.selectedCategory}  tasks={this.filterTasks()} />    
      </div>
    );
  }
}


export default App;
