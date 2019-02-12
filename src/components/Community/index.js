import React, { Component } from 'react';

import Button from '../../elements/Button';
import Label from '../../elements/Label';
import ImageCard from '../../elements/ImageCard';
import SocialActions from '../../elements/SocialActions';

import food1 from './../../assets/images/food-1.jpg';
import food2 from './../../assets/images/food-2.jpg';
import food3 from './../../assets/images/food-3.jpg';
import instagram from './../../assets/images/instagram-btn.png';
import comment from './../../assets/images/comment.svg';
import like from './../../assets/images/like.svg';

import './Community.scss';

class Community extends Component {
  render() {
    return (
      <div id="community" className="community-container">
        <div className="col-12 display-flex" >
          <div className="community-description col-6">
            <div className="community-description__container text-uppercase col-6">
              <Label classNames="title" text="Meet our" />
              <Label classNames="title" strike text="Community" />
              <Button text="Know More" filled />
              <Label
                classNames="details"
                text="Lorem ipsum dolor sit amet ernut tempartero sertu per nabore en torna entalto"
              />
            </div>
          </div>
          <div
            data-aos="slide-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-offset-top="1000"
            className="community-food-section-1 col-6"
          >
            <div className="sub-section-container">
              <ImageCard
                bgImage={food1}
                imgBtnAltText="instagram"
                imgBtnSrc={instagram}
                showImgBtn
              />
              <div className="sub-section-2">
                <Label
                  classNames="sub-section-title"
                  text="@buzzfeedfood"
                />
                <Label
                  classNames="sub-section-description"
                  text="It's taco Tuesday! These tacos from @jesseszewczyk have no
                  added sugars and are SO good. Find the recipe from the link in our bio!   :"
                />
                <Label
                  classNames="sub-section-tag"
                  text="@taylormillerphoto"
                />
                <div className="social-actions">
                  <SocialActions
                    altText="comment"
                    iconSrc={comment}
                    text="60"
                  />
                  <SocialActions
                    altText="like"
                    iconSrc={like}
                    text="14.7K"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 display-flex">
          <div
            data-aos="slide-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="community-food-section-2 col-6"
          >
            <div className="sub-section-container">
              <div className="sub-section-1">
                <Label
                  classNames="sub-section-title"
                  text="@love_food"
                />
                <Label
                  classNames="sub-section-description"
                  text="Waffle sticks in Copenhagen! Milk Chocolate with sprinkles,
                  dark chocolate with coconut and milk chocolate with peanuts! [  :"
                />
                <Label
                  classNames="sub-section-tag"
                  text="@foodwithmichel] #lovefood"
                />
                <div className="social-actions">
                  <SocialActions
                    altText="comment"
                    iconSrc={comment}
                    text="789"
                  />
                  <SocialActions
                    altText="like"
                    iconSrc={like}
                    text="99.7K"
                  />
                </div>
              </div>
              <ImageCard
                bgImage={food2}
                imgBtnAltText="instagram"
                imgBtnSrc={instagram}
                showImgBtn
              />
            </div>
          </div>
          <div
            data-aos="slide-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="community-food-section-2-about col-6"
          >
            <div className="sub-section-container col-6">
              <div className="sub-section-3">
                <Label
                  classNames="about"
                  text="Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 display-flex">
          <div
            data-aos="slide-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="community-food-section-3-about col-6"
          >
            <div className="sub-section-container col-6">
              <div className="sub-section-1">
                <Label
                  classNames="about"
                  text="Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Duis aute irure"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="slide-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="community-food-section-3 col-6"
          >
            <div className="sub-section-container">
              <div className="sub-section-2">
                <Label
                  classNames="sub-section-title"
                  text="@buzzfeedfood"
                />
                <Label
                  classNames="sub-section-description"
                  text="Getting into long weekend mode like #pancitpalabok"
                />
                <Label
                  classNames="sub-section-tag"
                  text="(@jeepneynyc)"
                />
                <div className="social-actions">
                  <SocialActions
                    altText="comment"
                    iconSrc={comment}
                    text="152"
                  />
                  <SocialActions
                    altText="like"
                    iconSrc={like}
                    text="18.2K"
                  />
                </div>
              </div>
              <ImageCard
                bgImage={food3}
                imgBtnAltText="instagram"
                imgBtnSrc={instagram}
                showImgBtn
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;