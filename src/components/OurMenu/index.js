import React, { Component } from 'react';

import Label from '../../elements/Label';
import Button from '../../elements/Button';
import MenuItem from '../../elements/MenuItem';

import './OurMenu.scss';

class OurMenu extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const ourMenu = document.getElementById('our-menu');
      if (ourMenu) {
        const first = document.getElementById('first');
        const second = document.getElementById('second');
        const third = document.getElementById('third');
        const fourth = document.getElementById('fourth');
        const firstSibling = first.previousSibling;
        const secondSibling = second.previousSibling;
        const thirdSibling = third.previousSibling;
        const fourthSibling = fourth.previousSibling;
        if (ourMenu.getBoundingClientRect().y <= 0) {
          firstSibling.classList.remove('active');
          secondSibling.classList.remove('active');
          thirdSibling.classList.remove('active');
          fourthSibling.classList.add('active');
          first.innerText = "";
          second.innerText = "";
          third.innerText = "";
          fourth.innerText = "04";
        }
      }
    })
  }

  render() {
    return (
      <div id="our-menu" className="our-menu-container">
        {/* title section */}
        <div className="row-1 text-uppercase col-12">
          <div className="title-container">
            <Label classNames="title" strike text="Our Menu" />
          </div>
          <Button text="Know More" filled />
        </div>

        {/* menu sections */}
        <div className="row-2 display-flex col-12">
          <div className="column-container col-3">
            <div
              data-aos="slide-up"
              data-aos-duration="1500"
              className="menu-section-1"
            >
              <Label classNames="section-title text-uppercase" text="Starters" />
              <MenuItem
                menuItemTitleText="Quinoa croquettas"
                menuItemDetailText="Quinoa and cheddar croquettas with
                aji rocotto & pineapple salsa (v)"
                price="£4.95"
              />
              <MenuItem
                menuItemTitleText="Chifa Chicharrones"
                menuItemDetailText="Slow cooked, crispy pork belly
                with sweet soy sauce"
                price="£6.95"
              />
              <MenuItem
                menuItemTitleText="Calamares"
                menuItemDetailText="Crispy baby squid with pickled
                jalapeño miso salsa"
                price="£6.95"
              />
            </div>
          </div>
          <div className="column-container col-3 ">
            <div
              data-aos="slide-down"
              data-aos-duration="1500"
              className="menu-section-2 right-border"
            >
              <Label classNames="section-title text-uppercase" text="Main Courses" />
              <MenuItem
                menuItemTitleText="El Clasico"
                menuItemDetailText="Sea bass ceviche with aji limo
                tiger’s milk, sweet potato purée, choclo corn, red onion,
                coriander & plantain (gf)"
                price="£8.95"
              />
              <MenuItem
                menuItemTitleText="Tiradito Callao"
                menuItemDetailText="Cobia tiradito with coriander
                tiger’s milk, black tobika, crème fraiche &
                sweet potato crunchies"
                price="£8.95"
              />
            </div>
          </div>
          <div className="column-container col-3 ">
            <div
              data-aos="slide-up"
              data-aos-duration="1500"
              className="menu-section-3 right-border"
            >
              <Label classNames="section-title text-uppercase" text="Sides" />
              <MenuItem
                menuItemTitleText="Super Pollo"
                menuItemDetailText="Marinated corn fed chicken
                pieces with rocotto salsa"
                price="£4.95"
              />
              <MenuItem
                menuItemTitleText="Patatas Fritas"
                menuItemDetailText="Sweet potato fries with aji
                rocotto mayonnaise (v)"
                price="£3.95"
              />
            </div>
          </div>
          <div className="column-container col-3">
            <div
              data-aos="slide-down"
              data-aos-duration="1500"
              className="menu-section-4 right-border"
            >
              <Label classNames="section-title text-uppercase" text="Desserts" />
              <MenuItem
                menuItemTitleText="Icecream"
                menuItemDetailText="Lorem ipsum dolor sit amet
                salerma petrum sea"
                price="£3.95"
              />
              <MenuItem
                menuItemTitleText="Tiramisu"
                menuItemDetailText="Lorem ipsum dolor sit amet
                salerma petrum sea"
                price="£3.95"
              />
              <MenuItem
                menuItemTitleText="Chocolate Brownie"
                menuItemDetailText="Lorem ipsum dolor sit amet
                salerma petrum sea"
                price="£3.95"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurMenu;