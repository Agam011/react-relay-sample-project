import React from 'react'

import Sample from './SampleFeaturedCategory';
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";
import '../css/listPage.css';

class ListPage extends React.Component {

  render() {
    const {
      optionsArray,
    } = this.props;
    return (
      <div>
        <ul className="makesList">
          {optionsArray.map((option, index) => (
            <li key={index}>{option.value}</li>
          ))}
        </ul>
        <ul>
          <li>
            <QueryRenderer
              environment={environment}
              query={graphql`
                query ListPage_FeaturedCategory_Query {
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
          </li>
        </ul>
      </div>
    );
  }
}
export default ListPage
