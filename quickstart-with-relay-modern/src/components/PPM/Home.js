import React, { Component } from 'react';
import Banner from './Banner';
import ShopByTabs from './shopByTabs/ShopByTabs';
import "../../css/home.scss";

export default class Home extends Component {
    render() {
        return (
          <section className="wrapper">
            <Banner />
            <ShopByTabs />
          </section>
        );
    }
}
