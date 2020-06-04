import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";
import ListPage from "./ListPage";

const ModalQuery = graphql`
  query ModalQuery($year: String!, $make: String!) {
    store {
      model(year: $year, make: $make) {
        key
        value
      }
    }
  }
`;

class Modal extends Component {
  render() {
    const { year, make, model } = this.props;
    
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={ModalQuery}
          variables={{
            year,
            make,
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
                  optionsArray={props.store.model}
                  ModalValue={this.props.ModalValue}
                  messageID="ModalMessage"
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
export default Modal;
