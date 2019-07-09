import React, { useState } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Inputs from './Input'
import MyFetch from './fetch';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")
  const [referrer, setReferrer] = useState(false);

  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      cb()
    },
  };

  const login = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/auth', {
      method: 'POST',
      body: JSON.stringify({ 'email': 'kate@gmail.com', 'password': 'abc123QW' })
    }).then(res => res.json())
      .then((res) => {
        if (res.token) {
          fakeAuth.authenticate(() => {
            setReferrer(true)
          });
          localStorage.setItem('token', res.token)
          console.log(localStorage.getItem('token'))
        }
      }).catch(err => {
        if (err) {
          setErr(<p> {err.message} </p>)
        }
      })
  };

  let { from } = { from: { pathname: "/home" } };

  if (referrer) return <Redirect to={from} />;

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  // MyFetch('users/403', 'GET', { "Authorization": "Bearer kndcbukwe12" }, (e) => {
  //   if(e){
  //     setErr('Error: Necesitas ser administrador')
  //   }
  // })

  return (
    <form onSubmit={login} className="col-12 flex-column d-flex form-group">
      <h3 className="medium">Iniciar sesión</h3>
      <Inputs
        type='email'
        value={email}
        update={updateEmail}
        placeholder='Email'
        icon='fas fa-user'
        classValue='emailValue form-control' />
      <Inputs
        type='password'
        value={password}
        update={updatePassword}
        placeholder='Password'
        icon='fas fa-lock'
        classValue='passwordValue form-control'
      />
      <button type="submit">
        <Link to='/home' className='btn btn-color'>Ingresa</Link>
      </button>
      {err}
    </form>
  )
}

export default Form;