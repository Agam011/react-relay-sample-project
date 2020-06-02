import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    classvalue: PropTypes.string,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;
    const { classvalue } = this.props;
    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <li
        className={classnames(className, classvalue)}
        onClick={onClick}
        role="presentation"
        id={this.props.id}
        aria-label="list item"
      >
        {label}
      </li>
    );
  }
}

export default Tab;
