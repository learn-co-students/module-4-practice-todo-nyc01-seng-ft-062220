import React from "react"

class Categories extends React.Component{

    onClickHandler = (e) => {
        this.props.onCLickHandler(e.target.innerHTML)
    }


    render(){

        return(
            <div className="categories"><h5>Category filters</h5>
                <button className="selected" onClick={this.onClickHandler}>All</button>
                <button onClick={this.onClickHandler}>Code</button>
                <button onClick={this.onClickHandler}>Food</button>
                <button onClick={this.onClickHandler}>Money</button>
                <button onClick={this.onClickHandler} >Misc</button>
            </div>

        )

    }

}

export default Categories