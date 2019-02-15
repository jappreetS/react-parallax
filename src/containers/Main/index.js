import React, { Component } from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './../Home';

class Main extends Component {
  constructor() {
    super();
    AOS.init();
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Redirect exact from='/' to='/parallax' component={Home} />
          <Route exact path='/parallax' component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;