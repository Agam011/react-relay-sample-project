import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";
import ListPage from "./ListPage";

const EngineQuery = graphql`
  query EngineQuery(
    $year: String!
    $make: String!
    $model: String!
    $submodel: String!
  ) {
    store {
      engine(year: $year, make: $make, model: $model, submodel: $submodel) {
        key
        value
      }
    }
  }
`;

class Submodal extends Component {
  render() {
    const { year, make, model, submodel, engine } = this.props;
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={EngineQuery}
          variables={{
            year,
            make,
            model,
            submodel,
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
                  engine={engine}
                  optionsArray={props.store.engine}
                  engineValue={this.props.engineValue}
                  messageID="EngineMessage"
                />
              );
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}
export default Submodal;
