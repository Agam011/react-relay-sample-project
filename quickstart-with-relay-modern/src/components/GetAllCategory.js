import React, { Component } from 'react'
import Sample from "./SampleFeaturedCategory";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";

 class GetAllCategory extends Component {
    render() {
        return (
          <div>
            <QueryRenderer
              environment={environment}
              query={graphql`
                query GetAllCategory_FeaturedCategory_Query {
                  store {
                    ...SampleFeaturedCategory_store
                  }
                }
              `}
              render={({ error, props }) => {
                if (error) {
                  return <div>{error.message}</div>;
                } else if (props) {
                  return <Sample store={props.store} />;
                }
                return <div>Loading</div>;
              }}
            />
          </div>
        );
    }
}
export default GetAllCategory;