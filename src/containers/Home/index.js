import React, { Component, Fragment } from 'react';

import About from './../../components/About';
import Community from '../../components/Community';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <About />
        <Community />
      </Fragment>
    );
  }
}

export default Home;