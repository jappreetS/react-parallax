import React, { Component, Fragment } from 'react';

import Navbar from '../../components/Navbar';
import SideContainer from '../../components/SideContainer';
import About from './../../components/About';
import Community from '../../components/Community';
import Map from '../../components/Map';
import OurMenu from '../../components/OurMenu';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <SideContainer />
        <About />
        <Community />
        <Map />
        <OurMenu />
      </Fragment>
    );
  }
}

export default Home;