import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../createRelayEnvironment'
import ListPage from './ListPage'


const MakeQuery = graphql`
  query MakeQuery($year: String!) {
    store {
      makes(year: $year) {
        key
        value
      }
    }
  }
`;

class Home extends Component {
  constructor(props) {

    super(props);
    this.state = {
      makes: [],
      year: "2019"
    };
  }
  render() {
    const { year } = this.state;
    return (
      <QueryRenderer
        environment={environment}
        query={MakeQuery}
        variables={{
          year,
        }}
        render={({ error, props }) => {
          
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
           
            return <ListPage optionsArray={props.store.makes} />;
          }
          return <div>Loading</div>
        }}
      />
    )
  }
}

export default Home
