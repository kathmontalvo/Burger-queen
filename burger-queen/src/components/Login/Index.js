import React from 'react';
import Form from './Form';
import ImgLogin from '../ImgLogin';
import img from '../../images/bq.png'
// import logo from '../images/hamburger.png'
import GetToken from '../../controller/Login'

const Login = () => {
  return (
    <>
      {/* <ImgLogin
        imgSrc={logo}
        cssClass='col-12 text-center align-self-start mb-4'
        imgClass="img-fluid logo"
      /> */}
      <main className='container d-flex fill-available justify-content-center align-items-center'>
        <ImgLogin
          imgSrc={img}
          cssClass="col-lg-6 justify-content-center text-align"
          imgClass="img-fluid"
        />
        <div
          className="col-lg-6 py-3 d-flex align-items-center form-style flex-column">
          <Form onSubmit={GetToken}/>
        </div>
      </main>
    </>
  )
}
export default Login