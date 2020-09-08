import React from 'react';
import './App.css';
import Category from './Containers/Category'
import TaskContainer from './Containers/TaskContainer'

class Todo extends React.Component {

  state = {
    selectedCategory: "All", 
    user: true,   
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

  // fetchTest = () => {

  //   fetch('http://localhost:3000/api/v1/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: "test7",
  //         password: "whatscooking",
  //         bio: "Sylvia Woods was an American restaurateur who founded the sould food restaurant Sylvia's in Harlem on Lenox Avenue, New York City in 1962. She published two cookbooks and was an important figure in the community.",
  //         avatar: "https://upload.wikimedia.org/wikipedia/commons/4/49/Syvia_of_Sylvia%27s_reaturant_N.Y.C_%28cropped%29.jpg"
  //       }
  //     })
  //   })
  //   .then(r => r.json())
  //   .then(console.log)
  // }
  
  componentDidMount() {
    // this.fetchTest()
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
    // console.log(e.target)
    // this.selectedArray()
    this.setState({selectedCategory: select })
  }

  addTask = (taskObj) => {
    this.setState({tasks: [...this.state.tasks, taskObj]})
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
        <Category user={this.state.user} selectedState ={this.state.selectedCategory} selectedCategory ={this.selectedCategory} />    
        <TaskContainer user={this.state.user} addTask={this.addTask}  deleteTask={this.deleteTask} category={this.state.selectedCategory}  tasks={this.filterTasks()} /> 
    </div> 
     
     
    );
  }
}


export default Todo;