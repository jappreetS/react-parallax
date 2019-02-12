import React from 'react';

import Label from '../Label';
import './SocialActions.scss';

const SocialActions = ({
  altText,
  iconSrc,
  text
}) =>
  (
    <div className="action">
      <img alt={altText} src={iconSrc} />
      <Label classNames="number" text={text} />
    </div>
  )

export default SocialActions;