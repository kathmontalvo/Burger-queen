import React from 'react'

const MenuOpts = ({ name, click, imgMenu }) => {
  return (
    <div className="container-menu" onClick={click} >
      <img src={imgMenu} alt="Menu" className="img-fluid mb-4 px-2 home-images"/>
      <div className="menu-opts">{name}</div>
    </div>
  )
};

export default MenuOpts;