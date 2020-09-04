import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import About from './Components/About'
import TaskForm from './Components/TaskForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render((
    <Router>
        <div>
        <Navbar />
        <Route exact path="/" component={App} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Add" component={TaskForm}/>
        </div>

    </Router>),
        document.getElementById('root')
)

