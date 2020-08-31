import React from "react"

class Form extends React.Component {

    state = {
        text: '',
        category: ''
    }

    onChangeHandler = (e) => {
        if (e.target.name === "text") {
            this.setState({
                text: e.target.value
            })
        } else if (e.target.name === "category") {
            this.setState({
                category: e.target.value
            })
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onSubmitHandler(this.state)
    }


    render() {
        return(
            <div>
                <form style={{margin: "50px"}} onSubmit={this.onSubmitHandler}>
                    <input type="text" name="text" placeholder="Todo" onChange={this.onChangeHandler} />
                    <input type="text" name="category" placeholder="Category" onChange={this.onChangeHandler} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default Form