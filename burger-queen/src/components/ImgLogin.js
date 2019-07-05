import React from 'react';

const ImgLogin = ({ imgSrc, cssClass }) => {
  return (
    <div className={cssClass}>
      <img src={imgSrc} alt="img" className = "img-fluid" />
    </div>
  )
}

export default ImgLogin;