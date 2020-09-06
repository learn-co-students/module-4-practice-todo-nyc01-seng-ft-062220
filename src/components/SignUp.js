import React from 'react'

class SignUp extends React.Component {

    state = {
        username: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return(
            <div>
                <h2>SignUp</h2>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.changeHandler}/>
                    <input type="text" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.changeHandler}/>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default SignUp
