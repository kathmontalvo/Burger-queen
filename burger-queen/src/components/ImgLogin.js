import React from 'react';

const ImgLogin = ({ imgSrc, cssClass, imgClass }) => {
  return (
    <div className={cssClass}>
      <img src={imgSrc} alt="img" className={imgClass} />
    </div>
  )
}

export default ImgLogin;