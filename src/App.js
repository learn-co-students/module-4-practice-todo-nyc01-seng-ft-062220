import React from 'react';
import TaskContainer from './containers/TaskContainer'
import './App.css';
import { CATEGORIES } from './data'

class App extends React.Component {

  state = {
    selectedCategory: "All"
  }

  categoryButtonsToRender = () => {
    return CATEGORIES.map(category => <button key={category} className={category === this.state.selectedCategory ? "selected" : undefined} onClick={() => this.setState({ selectedCategory: category})}>{category}</button>)
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <div className="categories">
          <h5>Category Filters</h5>
          {this.categoryButtonsToRender()}
        </div>
        <TaskContainer selectedCategory={this.state.selectedCategory}/>
      </div>
    );
  }
}


export default App;
