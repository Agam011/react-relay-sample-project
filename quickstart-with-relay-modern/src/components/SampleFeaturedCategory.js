import React, { Component } from 'react'
import { createFragmentContainer, graphql } from "react-relay";

class SampleFeaturedCategory extends Component {
  render() {
    return (
      <div>
        <h1>Displayed List using fragment container</h1>
        <ul style={{ display: "flex" }}>
          {this.props.store.featuredCategory.categoryList.map(
            (option, index) => (
              <li key={index}>
                {option.category}
                <img src={option.largeImage} />
              </li>
            )
          )}
        </ul>

        {console.log("...............................", this.props)}
      </div>
    );
  }
}

export default createFragmentContainer(SampleFeaturedCategory, {
  store: graphql`
    fragment SampleFeaturedCategory_store on Store {
      featuredCategory {
        categoryList {
          catId
          category
          featured
          largeImage
          smallImage
          subCategoryList {
            subcategoryId
            subcategory
            subpopular
            largeImage
            smallImage
          }
        }
      }
    }
  `,
});
