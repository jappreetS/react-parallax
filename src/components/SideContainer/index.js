import React, { Component } from 'react';

import './SideContainer.scss';
import Button from '../../elements/Button';

class SideContainer extends Component {
  render() {
    return (
      <div className="side-container">
        <div className="left-section">
          <div className="line-container">
            <hr className="line active" /><span id="first">01</span>
            <hr className="line" /><span id="second"></span>
            <hr className="line" /><span id="third"></span>
            <hr className="line" /><span id="fourth"></span>
          </div>
        </div>
        <div className="right-section">
          <Button showBorder text="Request Info" />
        </div>
      </div>
    );
  }
}

export default SideContainer;