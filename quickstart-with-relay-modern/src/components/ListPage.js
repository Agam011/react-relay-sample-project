import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../css/listPage.css";

class ListPage extends React.Component {
  render() {
    const { optionsArray, make, model, submodel, messageID } = this.props;
    
    const options = [];
    optionsArray.map((option, index) => options.push(option.value));
    return (
      <div>
        <div style={{ width: "100%", padding: "2%" }}>
          {messageID === "MakeMessage" ? <label style={{ color: "blue" }}> Make:</label>
            : messageID === "SubModalMessage" ? <label style={{ color: "blue" }}> SubModal:</label>
              : <label style={{ color: "blue" }}> Modal:</label>}
          {messageID === "MakeMessage" ? 
            <Dropdown
              options={options}
              onChange={this.props.handleOnchange}
              value={make}
              placeholder="Select an option"
            />
            : messageID === "ModalMessage" ?
              <Dropdown
                options={options}
                onChange={this.props.ModalValue}
                value={model}
                placeholder="Select an option"
              />
            : messageID === "SubModalMessage" ?
              <Dropdown
                options={options}
                onChange={this.props.subModalValue}
                value={submodel}
                placeholder="Select an option"
              />
              
          : null }
        </div>
      </div>
    );
  }
}
export default ListPage;
