
import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";
import ListPage from "./ListPage";

const SubModalQuery = graphql`
  query SubModalQuery($year: String!, $make: String!, $model: String!) {
    store {
      submodel(year: $year, make: $make, model:$model) {
        key
        value
      }
    }
  }
`;

class Submodal extends Component {
  render() {
    const { year, make, model, submodel} = this.props;
        return (
            <div>
            <QueryRenderer
              environment={environment}
              query={SubModalQuery}
              variables={{
                year,
                make,
                model
              }}
              render={({ error, props }) => {
                if (error) {
                  return <div>{error.message}</div>;
                } else if (props) {
                  return (
                    <ListPage
                      year={year}
                      make={make}
                      model={model}
                      submodel={submodel}
                      optionsArray={props.store.submodel}
                      subModalValue={this.props.subModalValue}
                      messageID="SubModalMessage"
                    />
                  );
                }
                return <div>Loading</div>;
              }}
            />
            </div>
        )
    }
}
export default Submodal