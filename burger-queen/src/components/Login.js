import React from 'react';
import Form from './Form';
import ImgLogin from './ImgLogin';
import img from '../images/burger.png'
import logo from '../images/renderforest-logo2.jpg'

const Login = () => {
  return (
    // <div className=" h-100 d-flex align-items-center">
    <>
      {/* <div className="col-12 logo"> */}
        <ImgLogin imgSrc={logo} cssClass='col-12 logo'/>
      {/* </div> */}

      <div className='container col-12 d-flex align-items-center main-box'>
        <ImgLogin imgSrc={img} cssClass="col-lg-6 justify-content-center main-img"/>
        <div className="col-lg-6 py-3 d-flex align-items-center form-height">
          <Form />
        </div>
      </div>
      </>
    // </div>
  )
}
export default Login