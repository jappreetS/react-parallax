import React from 'react';

import './Button.scss';

const Button = ({
  text,
  filled
}) =>
  (
    <button className={filled ? 'primary' : 'secondary'}>{text}</button>
  )

export default Button;