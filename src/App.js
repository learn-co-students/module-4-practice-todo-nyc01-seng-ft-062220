import React from 'react'
import MyTasks from './MyTasks';
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import Info from './components/Info'
import User from './components/User'
import LogIn from './components/LogIn'

class App extends React.Component {

    state = {
        user: false  
    }
    //for some reason it throws 500 code!!!???
    componentDidMount() {
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:3000/api/v1/profile", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                this.setState({user: data.user})
            })
        }
        else {
            this.props.history.push("/signup")
        }
    }

    signupHandler = (userObj) => {
        let obj={
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                user: userObj 
            })
        }
        fetch('http://localhost:3000/api/v1/users', obj)
        .then(response => response.json())
        .then(data => {
            this.setState({
                user: data 
            })
        })
    }

    loginHandler = (userObj) => {

        let obj = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                user: userObj
            })
        }

        fetch('http://localhost:3000/api/v1/login', obj)
        .then(response => response.json())
        .then(data => {
            console.log(data.jwt)
            localStorage.setItem('token', data.jwt)
            this.setState({
                user: data.user
            }, () => this.props.history.push('/info'))  //Now it's working!! Next step is to find out what is an error in my dev console.
        })
    }

    logoutHandler = () => {
        localStorage.removeItem('token')
        this.props.history.push('/login')
        this.setState({
            user: false
        })
    }

    render() {
        return (
            <Switch> 
                <div>
                    <NavBar clickHandler={this.logoutHandler} currentUser={this.state.user}/>
                    <Route exact path='/' component={MyTasks} />
                    <Route exact path='/signup' render={() => <SignUp submitHandler={this.signupHandler}/>} />
                    <Route exact path='/login' render={() => <LogIn submitHandler={this.loginHandler}/>} />
                    <Route exact path='/info' render={() => <Info user={this.state.user}/>} /> 
                    <Route exact path='/user' render={() => <User currentUser={this.state.user}/>} />
                </div>
            </Switch>
        )
    }
}

export default withRouter(App) 