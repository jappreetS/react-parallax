import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './../Home';

const Main = () => (
  <React.Fragment>
    <Switch>
      <Redirect exact from='/' to='/parallax' component={Home} />
      <Route exact path='/parallax' component={Home} />
    </Switch>
  </React.Fragment>
);

export default Main;