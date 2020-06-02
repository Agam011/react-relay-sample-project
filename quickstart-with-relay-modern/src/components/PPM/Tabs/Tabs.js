import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import classnames from "classnames";

import "./Tabs.scss";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;
    const { className } = this.props;
    return (
      <div className={classnames("tabs-wrap", className)}>
        <ol className="tab-list">
          {children.map((child, i) => {
            const { label, classvalue } = child.props;
            const show = child.props.show ? child.props.show : "";
            const id = `${label.split(" ")[0]}_${i}`;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                classvalue={classvalue}
                show={show}
                id={id}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
