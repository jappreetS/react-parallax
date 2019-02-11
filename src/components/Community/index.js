import React, { Component } from 'react';

import './Community.scss';

class Community extends Component {
  render() {
    return (
      <div id="community" className="community-container">
        <div className="community-description">
          <div className="community-description__container text-uppercase">
            <div className="title">Meet our</div>
            <div className="title strike">Community</div>
            <button className="know-more">Know More</button>
            <div className="details">
              Lorem ipsum dolor sit amet ernut tempartero sertu per nabore en torna entalto
            </div>
          </div>
        </div>
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