import React, { Component } from 'react';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div id="about-container" className="about-container text-uppercase">
        <div className="line-1">The Best Foodie</div>
        <div className="line-2">Experience</div>
        <div className="line-3">Now in London</div>
      </div>
    );
  }
}

export default About;