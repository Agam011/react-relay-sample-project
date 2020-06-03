import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../createRelayEnvironment'
import ListPage from './ListPage'
import Dropdown from "react-dropdown";
import GetAllCategory from './GetAllCategory';
import "react-dropdown/style.css";

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
    const thisYear = new Date().getFullYear();
    this.state = {
      makes: [],
      year: thisYear.toString(),
      thisYear: thisYear,
    };
  }
  _onSelect = (year) => {
    this.setState({ year: year.value.toString() });
  };

  render() {
    const { year, thisYear } = this.state;
    const minOffset = 0;
    const maxOffset = 60;
     const options = [];

     for (let i = minOffset; i <= maxOffset; i++) {
       const years = thisYear - i;
       options.push(years).toString();
     }
    return (
      <div>
        <div style={{ backgroundColor: "#87CEFA" }}>
          <div style={{ width: "100%", padding: "2%" }}>
            <label style={{ color: "blue" }}>Year:</label>
            <Dropdown
              options={options}
              onChange={this._onSelect}
              value={year}
              placeholder="Select an option"
            />
          </div>
          <QueryRenderer
            environment={environment}
            query={MakeQuery}
            variables={{
              year,
            }}
            render={({ error, props }) => {
              if (error) {
                return <div>{error.message}</div>;
              } else if (props) {
                return (
                  <ListPage year={year} optionsArray={props.store.makes} />
                );
              }
              return <div>Loading</div>;
            }}
          />
        </div>

        <GetAllCategory />
      </div>
    );
  }
}

export default Home
