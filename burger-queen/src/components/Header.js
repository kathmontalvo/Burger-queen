import React from 'react';
import ImgLogin from '../components/ImgLogin'
import burger from'../images/hamburger.png'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';

const Header = () => {
  return (
    <div className="width-100 mt-2 d-flex justify-content-center">
      <ImgLogin
        imgSrc={burger}
        cssClass="text-center align-self-start mb-4"
        imgClass="img-fluid logo max-50"
      />
      <div className="dropdown">
        <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-bars"></i>
        </button>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        {/* <Link to="/">Cerrar sesión</Link> */}
        </div>
      </div>
    </div>
  )
}

export default Header