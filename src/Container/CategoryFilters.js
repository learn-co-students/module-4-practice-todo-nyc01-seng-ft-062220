import React from 'react';

class CategoryFilter extends React.Component {

    selectCategory = (e) =>{
        if (document.querySelector("button.selected")){
        let previousButton = document.querySelector("button.selected")
        previousButton.className = ""
        }
        e.target.className = "selected"
        this.props.updateCategory(e.target.value)
    }

    createCategories = () => {
    return this.props.categories.map(category => <button key={category} value={category} onClick={this.selectCategory} > {category}</button>)
    }

    render(){
        return(
            <div className="categories">
                <h5>Category filters</h5>
                {this.createCategories()}
            </div>
        )
    }
}

export default CategoryFilter;