import React from 'react';
import ImgLogin from '../ImgLogin'
import burger from '../../images/hamburger.png'
// eslint-disable-next-line
import auth from '../../controller/routes/auth'
const Header = ({logoutprop}) => {
  return (
    <header className="width-100 mt-2 d-flex height-60">
      <ul className="width-100 nav nav-tabs justify-content-center">
        <li className="nav-item">
          <ImgLogin
            imgSrc={burger}
            cssClass="text-center align-self-start mb-4"
            imgClass="img-fluid max-50"
          />
        </li>
        <li className="nav-item dropdown bars">
          <div className="nav-link dropdown-toggle dropdown-color" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className='fas fa-bars'></i></div>
          <div className="dropdown-menu dropdown-menu-right" >
          <a onClick={()=>{auth.logout(()=>{logoutprop.history.push("/")})}} >Cerrar Sesión</a>
          </div>
        </li>
      </ul>

    </header>
  )
};

export default Header;