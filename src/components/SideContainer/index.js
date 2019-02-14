import React, { Component } from 'react';

import './SideContainer.scss';
import Button from '../../elements/Button';

class SideContainer extends Component {
  render() {
    return (
      <div className="side-container">
        <button>Contact Info 1</button>
        <div className="right-section">
          <Button showBorder text="Request Info" />
        </div>
      </div>
    );
  }
}

export default SideContainer;