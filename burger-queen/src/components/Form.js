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
    const form = e.target.closest('form')
    const email = form.querySelector('.emailValue').value
    const password = form.querySelector('.passwordValue').value
    return MyFetch('auth', {
      method: 'POST',
      body: JSON.stringify({ 'email': email, 'password': password })
    }, (res) => {
      if (res.token) {
        fakeAuth.authenticate(() => {
          setReferrer(true)
        });
        localStorage.setItem('token', res.token)
        console.log(localStorage.getItem('token'))
      }
    }, (err) => {
      if (err) {
        setErr(<p className='pt-3 text-danger'> *{err.message} </p>)
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

  return (
    <form onSubmit={login} className="col-12 flex-column d-flex form-group">
      <h3 className="medium">Iniciar sesión</h3>
      <Inputs
        type='email'
        value={email}
        label='Email'
        update={updateEmail}
        placeholder='Email'
        icon='fas fa-user'
        classValue='emailValue form-control' />
      <Inputs
        type='password'
        value={password}
        label='Password'
        update={updatePassword}
        placeholder='Password'
        icon='fas fa-lock'
        classValue='passwordValue form-control '
      />
      <button type="submit" className='btn btn-color'>Ingresar</button>
      {err}
    </form>
  )
}

export default Form;