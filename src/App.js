import React from 'react';
import './App.css';
import { CATEGORIES } from './data'

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
    selected: []
  }

  clickHandler = (e) => {
    e.target.parentElement.childNodes.forEach(button => button.className = " ")
    
     e.target.classList.add("selected")

     if (e.target.innerText === "All") {
       this.setState({
         selected: this.state.tasks
       })
     } else {

       let selected = this.state.tasks.filter(task => task.category === e.target.innerText)
       
       this.setState({
        selected: selected
      })
     }

     
  }

 delHandler = (e) => {

  let newSelected = this.state.selected.filter(task => task.text !== e.target.parentElement.querySelector(".text").innerText)

  this.setState({
    selected: newSelected
  })
 }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
          <div className="categories">
            {CATEGORIES.map(cat => <button onClick={(e) => this.clickHandler(e)}>{cat}</button>)}
          </div>
        <div className="tasks">
          <h5>Tasks</h5>
          {this.state.selected.map(task => 
            <div className="task">
              <div className="label">{task.category}</div>
              <div className="text">{task.text}</div>
              <button onClick={(e) => this.delHandler(e)} className="delete">X</button>
            </div>
            
          )}
        </div>
      </div>
    );
  }
}


export default App;
