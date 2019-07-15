import React from 'react';
import ImgLogin from '../components/ImgLogin'
import logo from '../images/burgequeen.png'

const Header = () => {
  return (
    <div className="">
      <ImgLogin
        imgSrc={logo}
        cssClass="col-12 text-center align-self-start mb-4"
        imgClass="img-fluid logo"
      />
    </div>
  )
}

export default Header