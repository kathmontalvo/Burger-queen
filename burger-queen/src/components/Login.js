import React from 'react';
import Form from './Form';
import ImgLogin from './ImgLogin';
import img from '../images/bq.png'
import logo from '../images/burgequeen.png'
import GetToken from './submit'

const Login = () => {
  return (
    <>
      <ImgLogin
        imgSrc={logo}
        cssClass='col-12 text-center align-self-start mb-4'
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
          <Form onSubmit={GetToken}/>
        </div>
      </div>
    </>
  )
}
export default Login