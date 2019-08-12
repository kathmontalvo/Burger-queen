import React from 'react';
import burger from '../images/hamburger.png'
// eslint-disable-next-line
import auth from '../controller/routes/auth'
const Header = ({ logoutprop }) => {
  return (
    <header data-testid="header" className="width-100 mt-2 mb-4 d-flex height-60">
      <ul className="width-100 nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button data-testid='burger' onClick={() => { auth.login(() => { logoutprop.history.push("/home") }) }} className="text-center align-self-start mb-4 border-none transparent cursor">
            <img src={burger} alt="img" className="img-fluid max-50" />
          </button>
        </li>
        <li className="nav-item dropdown bars">
          <div className="nav-link dropdown-toggle dropdown-color" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className='fas fa-bars'></i></div>
          <div className="dropdown-menu dropdown-menu-right" >
            <a data-testid='close' onClick={() => {
              auth.logout(() => { logoutprop.history.push("/") });
              localStorage.setItem('token', '')
              }} >Cerrar Sesión</a>
          </div>
        </li>
      </ul>

    </header>
  )
};

export default Header;