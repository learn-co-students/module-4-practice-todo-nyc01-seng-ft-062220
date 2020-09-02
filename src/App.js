import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Category from './Containers/Category'
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

    selectedCategory: '',
    selectArr: []
    
  }

  selectedCategory = (e) => {
    let select = e.target.innerText
    console.log(e.target)
    // this.selectedArray()
    this.setState({selectedCategory: select },() => this.selectedArray() )
  }

  selectedArray = () => {
    console.log(this.state.selectedCategory)
    let filtered = this.state.tasks.filter((array) => array.category === this.state.selectedCategory)
    this.setState({selectArr: filtered})
    
  }


  render() {
    // console.log(CATEGORIES)
    return (
      <div className="App">
        <h2>My tasks</h2> 
        <Category selectedState ={this.state.selectedCategory} selectedCategory ={this.selectedCategory} />    
        <TaskContainer filterArray={this.state.selectArr} taskArray={this.state.tasks} />    
      </div>
    );
  }
}


export default App;
