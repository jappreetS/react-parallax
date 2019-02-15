import React, { Component } from 'react';

import stamp from './../../assets/images/stamp.png';
import './About.scss';

class About extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const about = document.getElementById('about');
      if (about) {
        const first = document.getElementById('first');
        const second = document.getElementById('second');
        const third = document.getElementById('third');
        const fourth = document.getElementById('fourth');
        const firstSibling = first.previousSibling;
        const secondSibling = second.previousSibling;
        const thirdSibling = third.previousSibling;
        const fourthSibling = fourth.previousSibling;
        if (about.getBoundingClientRect().y <= 0) {
          firstSibling.classList.add('active');
          secondSibling.classList.remove('active');
          thirdSibling.classList.remove('active');
          fourthSibling.classList.remove('active');
          first.innerText = "01";
          second.innerText = "";
          third.innerText = "";
          fourth.innerText = "";
        }
      }
    })
  }
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