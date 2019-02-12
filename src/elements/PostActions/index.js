import React from 'react';

import Label from '../Label';

import './PostActions.scss';

const PostActions = ({
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

export default PostActions;