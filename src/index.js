import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import About from './Components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render((
    <Router>
        <div>
        <Navbar />
        <Route exact path="/" component={App} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/About" component={About} />
        </div>

    </Router>),
        document.getElementById('root')
)

