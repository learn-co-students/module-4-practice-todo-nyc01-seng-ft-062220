import React from 'react'
import { CATEGORIES } from '../data'


class Category extends React.Component {
    

    render() {
       let renderCategory = CATEGORIES.map((categoryObj) => <button className={this.props.selectedState === categoryObj ? "selected" : null} onClick={(e)=> this.props.selectedCategory(e)}  key={categoryObj.id}> {categoryObj} </button>)
        return(
            <div className="categories" >
          <h5>Category Filters</h5>  
            {renderCategory}
        </div>

        )
    }
}

export default Category