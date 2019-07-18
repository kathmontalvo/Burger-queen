import React, { useState } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Inputs from '../Input'

const Form = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")
  const [referrer, setReferrer] = useState(false);

  let { from } = { from: { pathname: "/home" } };
  if (referrer) return <Redirect to={from} />;

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
      onSubmit(email,password,() => {
          setErr('')
          return setReferrer(true)
        },(err) => {
          if (err) {
            return setErr(err.message)
          }
        },
      )
    }

    } className="col-12 flex-column d-flex form-group" data-testid="form">

      <Inputs
        divInput="input-group form-group radius-50 white"
        type='email'
        value={email}
        label='Email'
        update={updateEmail}
        placeholder='Email'
        icon='fas fa-user'
        classValue='emailValue form-control border-none radius-50'
        visibility="input-group-append border-none radius-50"/>
      <Inputs
        divInput="input-group form-group radius-50 white"
        type='password'
        value={password}
        label='Password'
        update={updatePassword}
        placeholder='Password'
        icon='fas fa-lock'
        classValue='passwordValue form-control border-none radius-50'
        visibility="input-group-append border-none radius-50"
      />
      <button data-testid='login' type="submit" className='btn btn-color'>Ingresar</button>
      {err && <p className='pt-3 text-danger'> *{err} </p>}
    </form>
  )
}

export default Form;