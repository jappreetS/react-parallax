import React from 'react';

import './ImageCard.scss';

const ImageCard = ({
  bgImage,
  imgBtnAltText,
  imgBtnSrc,
  showImgBtn,
}) =>
  (
    <div
      className="image-card"
      style={{ backgroundImage: 'url(' + bgImage + ')' }}
    >
      {
        showImgBtn
          ? <img alt={imgBtnAltText} src={imgBtnSrc} />
          : null
      }
    </div>
  )

export default ImageCard;