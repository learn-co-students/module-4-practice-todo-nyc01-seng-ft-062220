import React from 'react'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
 
class Navbar extends React.Component {
  render() {
    console.log(this.props.user)
    return (
      <React.Fragment>
        {this.props.user ? 
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
          >Home</NavLink>

        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
          >About</NavLink>
        
        <NavLink
          to="/add"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
          >Calendar</NavLink>
        
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
          >Login</NavLink>
      
      </div>
      :
        <Redirect to="/Login"/>
        }
    </React.Fragment>
    )
  }
}
 
export default Navbar