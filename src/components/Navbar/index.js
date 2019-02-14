import React, { Component } from 'react';

import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar-container" className="navbar-container text-uppercase">
        <ul>
          <li className="logo">Logo</li>
          <li><a href="#about">About</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#map">Location</a></li>
          <li><a href="#our-menu">Our Menu</a></li>
          <li>Recipes</li>
          <div className="push-right">
            <li>Contact</li>
            <li>Login</li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;