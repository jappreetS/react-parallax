import React from 'react';

import './Label.scss';

const Label = ({
  classNames,
  strike,
  text
}) =>
  (
    <div className={strike ? `${classNames} strike` : classNames}>{text}</div>
  )

export default Label;