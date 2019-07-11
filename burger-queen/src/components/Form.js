import React, { useState } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Inputs from './Input'

const Form = ({onSubmit}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")
  const [referrer, setReferrer] = useState(false);

  let { from } = { from: { pathname: "/home" } };
<<<<<<< HEAD
  if (referrer) return <Redirect to={from} />
=======
  if (referrer) return <Redirect to={from} />;
>>>>>>> 20f39aa236281299ca2bbf6e9d43e29c440552d3

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <form onSubmit={e => {
      e.preventDefault()
      const form = e.target.closest('form')
      const email = form.querySelector('.emailValue').value
      const password = form.querySelector('.passwordValue').value
      onSubmit({
        email: email,
        password: password,
        setReferrer: setReferrer(true),
        error: setErr(<p className='pt-3 text-danger'> *{err.message} </p>),
      }) 
    }

    } className="col-12 flex-column d-flex form-group" data-testid="form">
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
      <button data-testid='login' type="submit" className='btn btn-color'>Ingresar</button>
      {err}
    </form>
  )
}

export default Form;