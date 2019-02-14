import React from 'react';

import './Button.scss';

const Button = ({
  showBorder,
  text,
  filled
}) =>
  (
    <button
      className={filled ? `primary` : `secondary${showBorder ? '' : ' border'}`}
    >
      {text}
    </button>
  )

export default Button;