import React, { Component } from 'react';

import './Community.scss';

class Community extends Component {
  render() {
    return (
      <div id="community" className="community-container">
        <div className="community-description" />
        <div data-aos="slide-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-offset-top="1000"
          className="community-food-section-1"
        />
        <div data-aos="slide-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="community-food-section-2"
        />
        <div data-aos="slide-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="community-food-section-3"
        />
      </div>
    );
  }
}

export default Community;