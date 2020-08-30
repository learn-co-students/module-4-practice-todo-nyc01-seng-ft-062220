import React from 'react';

class CategoryContainer extends React.Component {

    mapCategories = () => {
        return (this.props.categories.map(category => {
          if(this.props.selectedCategory === category) {
            return (
                <button key={category} className="selected" onClick={event => this.props.clickHandler(event)} value={category}>{category}</button>
            ) 
          } else {
            return (
              <button key={category} onClick={event => this.props.clickHandler(event)} value={category}>{category}</button>
          ) 
          }
        }))
    }

    render() {
        return (
          <div className="categories">
            <h5>Category filters</h5>
            {this.mapCategories()}
          </div>
        );
      }

}

export default CategoryContainer;