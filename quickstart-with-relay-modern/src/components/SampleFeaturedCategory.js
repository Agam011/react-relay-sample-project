import React, { Component } from 'react'
import { createFragmentContainer, graphql } from "react-relay";
import "../css/Sample.css";

class SampleFeaturedCategory extends Component {
  render() {
    return (
      <div className="genearteDiv">
        <h1>Displayed List using fragment container</h1>
        <ul className="featureList">
          {this.props.store.featuredCategory.categoryList.map(
            (option, index) => (
              <li className="displayListForm" key={index}>
                {option.category}
                <div>
                  <img className="featureImg" src={option.largeImage} />
                </div>
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
