import React, { Component } from 'react';

import stamp from './../../assets/images/stamp.png';
import './About.scss';

class About extends Component {
  render() {
    return (
      <div id="about" className="about-container text-uppercase">
        <img alt="stamp" src={stamp} className="stamp" />
        <div className="line-1">The Best Foodie</div>
        <div className="line-2">Experience</div>
        <div className="line-3">Now in London</div>
      </div>
    );
  }
}

export default About;