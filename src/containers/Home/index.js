import React, { Component, Fragment } from 'react';

import Navbar from '../../components/Navbar';
import About from './../../components/About';
import Community from '../../components/Community';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <About />
        <Community />
      </Fragment>
    );
  }
}

export default Home;