import React from 'react';
import './App.css';
import Signup from './Components/Signup'
import Todo from './Todo'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Components/Login'
import About from './Components/About'
import Navbar from './Components/Navbar'


class App extends React.Component {

  state= {
    user: null
  }

  signupHandler = (userObj) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        accepts: "application/json", 
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(response => response.json())
    .then(data => this.setState({user: data.user}, ()=> this.props.history.push("/login")))
  }

  loginHandler = (userObj) => {
    console.log("logging in", userObj)
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        accepts: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: userObj})
    })
    .then(response => response.json())
    .then(data => this.setState({user: data.user}, ()=> this.props.history.push("/")))
    //navbar does not render when signed in only shows task list
  }

  render() {
    
    return (
      <Switch>
        <React.Fragment>
          <Navbar clickHandler={this.logoutHandler} user={this.state.user} />
          <Route exact path="/" component={Todo} />
          <Route exact path='/signup' render={() => <Signup submitHandler={this.signupHandler}/>} />
          <Route exact path='/login' render={() => <Login submitHandler={this.loginHandler}/>} />
          <Route exact path='/about' render={() => <About />} />
        </React.Fragment>
      </Switch>
    )
  }
}

export default withRouter(App)
