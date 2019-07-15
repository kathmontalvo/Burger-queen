import React from 'react';
import ImgLogin from '../components/ImgLogin'

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';

const Header = () => {
  return (
    <div className="container-fluid d-flex justify-content-around">
      <ImgLogin
        
        cssClass="col-12 text-center align-self-start mb-4"
        imgClass="img-fluid logo"
      />
      <div className="dropdown">
        <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-bars"></i>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to="/">Cerrar sesión</Link>
        </div>
      </div>
    </div>
  )
}

export default Header