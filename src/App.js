import React from 'react';
import './App.css';
import Categories from "./Categories";
import Tasks from "./Tasks";
import Form from "./Form";

class App extends React.Component {

  state = {
    tasks: [
      {
        id: 1,
        text: 'Buy rice',
        category: 'Food'
      },
      {
        id: 2,
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        id: 3,
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        id: 4,
        text: 'Build todo API',
        category: 'Code'
      },
      {
        id: 5,
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        id: 6,
        text: 'Cook rice',
        category: 'Food'
      },
      {
        id: 7,
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

  onClickDeleteHandler = (obj) => {
    let newArray = this.state.tasks.filter(task => task.id !== obj.id)

    this.setState({
      tasks: newArray
    })

  }

  onSubmitHandler = (obj) => {
    let newArray = [...this.state.tasks, obj]
    this.setState({
      tasks: newArray
    })

  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories onCLickHandler={this.onCLickHandler} />
        <Tasks key={this.state.tasks.id} data={this.state.tasks} filter={this.state.filter} onClickDeleteHandler={this.onClickDeleteHandler}/>
        <Form onSubmitHandler={this.onSubmitHandler}/>
      </div>
    );
  }
}


export default App;
