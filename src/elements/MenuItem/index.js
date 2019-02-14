import React from 'react';

import Label from '../Label';
import Button from '../Button';
import './MenuItem.scss';

const MenuItem = ({
  menuItemTitleText,
  menuItemDetailText,
  price
}) =>
  (
    <div className="menu-item">
      <Label classNames="menu-item-title text-uppercase" text={menuItemTitleText} />
      <Label
        classNames="menu-item-detail"
        text={menuItemDetailText}
      />
      <Button text={price} />
    </div>
  )

export default MenuItem;