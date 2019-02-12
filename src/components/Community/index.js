import React, { Component } from 'react';

import Button from '../../elements/Button';
import Label from '../../elements/Label';
import ImageCard from '../../elements/ImageCard';
import PostDetail from '../../elements/PostDetail';
import AboutRecipe from '../../elements/AboutRecipe';

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
        <div className="row-1 col-12 display-flex" >
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
              <PostDetail
                postTitleText="@buzzfeedfood"
                postDescriptionText="It's taco Tuesday! These tacos from @jesseszewczyk have no
                added sugars and are SO good. Find the recipe from the link in our bio! :"
                postTagText="@taylormillerphoto"
                commentAltText="comment"
                commentIconSrc={comment}
                commentCount="60"
                likeAltText="like"
                likeIconSrc={like}
                likeCount="14.7K"
              />
            </div>
          </div>
        </div>
        <div className="row-2 col-12 display-flex">
          <div
            data-aos="slide-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="community-food-section-2 col-6"
          >
            <div className="sub-section-container">
              <PostDetail
                postTitleText="@love_food"
                postDescriptionText="Waffle sticks in Copenhagen! Milk Chocolate with sprinkles,
                  dark chocolate with coconut and milk chocolate with peanuts! [  :"
                postTagText="@foodwithmichel] #lovefood"
                commentAltText="comment"
                commentIconSrc={comment}
                commentCount="789"
                likeAltText="like"
                likeIconSrc={like}
                likeCount="99.7K"
              />
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
            className="col-6"
          >
            <div className="col-6">
              <AboutRecipe
                aboutRecipeText="Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore"
              />
            </div>
          </div>
        </div>
        <div className="row-3 col-12 display-flex">
          <div
            data-aos="slide-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="col-6"
          >
            <div className="col-6">
              <AboutRecipe
                aboutRecipeText="Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Duis aute irure"
              />
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
              <PostDetail
                postTitleText="@buzzfeedfood"
                postDescriptionText="Getting into long weekend mode like #pancitpalabok"
                postTagText="(@jeepneynyc)"
                commentAltText="comment"
                commentIconSrc={comment}
                commentCount="152"
                likeAltText="like"
                likeIconSrc={like}
                likeCount="18.2K"
              />
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