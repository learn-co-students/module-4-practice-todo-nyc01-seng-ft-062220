import React from 'react';
import './App.css';
import Categories from "./Categories";
import Tasks from "./Tasks";

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
    filter: ''
  }

  onCLickHandler = (obj) => {
    this.setState({
      filter: obj
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories onCLickHandler={this.onCLickHandler} />
        <Tasks data={this.state.tasks} filter={this.state.filter}/>
      </div>
    );
  }
}


export default App;
