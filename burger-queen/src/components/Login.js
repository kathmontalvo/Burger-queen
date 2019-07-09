import React from 'react';
import Form from './Form';
import ImgLogin from './ImgLogin';
import img from '../images/bq.png'
import logo from '../images/burger queen.png'

const Login = () => {
  return (
    <>
      <ImgLogin
        imgSrc={logo}
        cssClass='col-12 text-center align-self-start mb-10'
        imgClass="img-fluid logo"
      />
      <div className='container col-12 d-flex align-items-center main-box'>
        <ImgLogin
          imgSrc={img}
          cssClass="col-lg-6 justify-content-center main-img"
          imgClass="img-fluid"
        />
        <div
          className="col-lg-6 py-3 d-flex align-items-center form-style flex-column">
          <Form />
        </div>
      </div>
    </>
  )
}
export default Login