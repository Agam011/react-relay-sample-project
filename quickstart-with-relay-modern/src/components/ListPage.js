import React from 'react'

// import Sample from './SampleFeaturedCategory';
// import { QueryRenderer, graphql } from "react-relay";
// import environment from "../createRelayEnvironment";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import '../css/listPage.css';

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "",
    };
  }
  handleOnchange = (make) => {
      console.log("............................,ff", make.value);
    this.setState({ make: make.value });
  };
  render() {
    const { optionsArray, year, make } = this.props;
    const options = [];
    optionsArray.map((option, index) => options.push(option.value));

    return (
      <div>
        <div style={{ width: "100%", padding: "2%" }}>
          <label style={{ color: "blue" }}>Make:</label>
          <Dropdown
            options={options}
            onChange={this.handleOnchange}
            value={options[0]}
            placeholder="Select an option"
          />
        </div>
        {/* <ul className="makesList">
          {optionsArray.map((option, index) => (
            <li key={index}>{option.value}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}
export default ListPage
