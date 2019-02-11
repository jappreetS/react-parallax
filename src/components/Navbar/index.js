import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar-container" className="navbar-container text-uppercase">
        <ul>
          <li className="logo">Logo</li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#community">Community</Link></li>
          <li>Location</li>
          <li>Our Menu</li>
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