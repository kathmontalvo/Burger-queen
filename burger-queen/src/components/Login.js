import React from 'react';
import Form from './Form';
import ImgLogin from './ImgLogin';
import img from '../images/burger.png'

const Login = () => {
  return (
    <div className="container h-100 d-flex align-items-center">
      <ImgLogin imgSrc={img} cssClass="col-lg-6 col-12 d-flex justify-content-center"/>
      <div className="col-lg-6 py-3">
        <ImgLogin imgSrc="" cssClass="col-12" />
        <Form />
      </div>
    </div>
  )
}
export default Login