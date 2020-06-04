import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../createRelayEnvironment'
import ListPage from './ListPage'
import Dropdown from "react-dropdown";
import GetAllCategory from './GetAllCategory';
import Modal from './Modal';
import SubModal from './SubModal'
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
      make: '',
      model:'',
      submodel:'',
      engine:'',
    };
  }
  _onSelect = (year) => {
    this.setState({ year: year.value.toString() });
  };
  handleOnchange = (event) => {
    
    this.setState({ make: event.value});
  };
  ModalValue = (event) => {

    this.setState({ model: event.value });
  };
  subModalValue = (event) => {

    this.setState({ submodel: event.value });
  };
  render() {
    const { year, thisYear, make, model, submodel, engine } = this.state;
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
                  <ListPage
                    year={year}
                    make={this.state.make}
                    optionsArray={props.store.makes}
                    handleOnchange={this.handleOnchange}
                    messageID="MakeMessage"
                  />
                );
              }
              return <div>Loading</div>;
            }}
          />
          {year ? <Modal year={year} make={make} model={this.state.model} ModalValue={this.ModalValue}/> : null}
          {make ? <SubModal year={year} make={make} model={model} submodel={submodel} subModalValue={this.subModalValue}/> : null}
        </div>
        <GetAllCategory />
      </div>
    );
  }
}

export default Home
