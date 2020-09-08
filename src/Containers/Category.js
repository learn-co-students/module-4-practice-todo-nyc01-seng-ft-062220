import React from 'react'
import { CATEGORIES } from '../data'


class Category extends React.Component {
    

    render() {
       let renderCategory = CATEGORIES.map((categoryObj, index) => <button className={this.props.selectedState === categoryObj ? "selected" : null} onClick={(e)=> this.props.selectedCategory(e)}  key={index}> {categoryObj} </button>)
        return(
            <div className="categories" >
          <h5>Category Filters</h5>  
            {renderCategory}
        </div>

        )
    }
}

export default Category