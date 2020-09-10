import React from 'react';
import './App.css';
import Signup from './Components/Signup'
import Todo from './Todo'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './Components/Login'
import About from './Components/About'
import Please from './Components/Please'
import Navbar from './Components/Navbar'


class App extends React.Component {

  state= {
    user: false
  }

  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) {
    fetch('http://localhost:3000/api/v1/profile', {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.json())
    .then(data => this.setState({user: data.user}), ()=> this.props.history.push("/"))
  } else {
    this.props.history.push("/login")
  }
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
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        accepts: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: userObj})
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({user: data.user}, ()=> this.props.history.push("/"))
    })
  }

  logoutHandler = () => {
    localStorage.removeItem('token')
    this.props.history.push("/login")
    this.setState({ user: false})
  }

  render() {
    
    return (
      <Switch>
        <React.Fragment>
          <Navbar clickHandler={this.logoutHandler} user={this.state.user} />
          { this.state.user !== false && 
          <Route exact path="/" component={Todo} />
          }
          { this.state.user === false && 
          <Route exact path="/" component={Please} />
          }
          <Route exact path='/signup' render={() => <Signup submitHandler={this.signupHandler}/>} />
          <Route exact path='/login' render={() => <Login submitHandler={this.loginHandler}/>} />
          <Route exact path='/about' render={() => <About user={this.state.user} />} />
        </React.Fragment>
      </Switch>
    )
  }
}

export default withRouter(App)
