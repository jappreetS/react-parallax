import React from 'react';

import Label from '../Label';

import './AboutRecipe.scss';

const AboutRecipe = ({
  aboutRecipeText
}) =>
  (
    <Label
      classNames="about-recipe"
      text={aboutRecipeText}
    />
  )

export default AboutRecipe;