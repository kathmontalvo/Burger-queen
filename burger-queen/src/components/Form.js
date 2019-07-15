import React, { useState } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Inputs from './Input'

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
          return setReferrer(true)
        },(err) => {
          if (err) {
            return setErr(<p className='pt-3 text-danger'> *{err.message} </p>)
          }
        },
      )
    }

    } className="col-12 flex-column d-flex form-group" data-testid="form">
      <h3 className="medium">Iniciar sesión</h3>
      <Inputs
<<<<<<< HEAD
=======
        divInput="input-group form-group "
>>>>>>> 477f07ecbf46075cf47f0dbcbafabfcccaccbcd8
        type='email'
        value={email}
        label='Email'
        update={updateEmail}
        placeholder='Email'
        icon='fas fa-user'
<<<<<<< HEAD
        classValue='emailValue form-control' />
      <Inputs
=======
        classValue='emailValue form-control'
        visibility="input-group-append"/>
      <Inputs
        divInput="input-group form-group "
>>>>>>> 477f07ecbf46075cf47f0dbcbafabfcccaccbcd8
        type='password'
        value={password}
        label='Password'
        update={updatePassword}
        placeholder='Password'
        icon='fas fa-lock'
<<<<<<< HEAD
        classValue='passwordValue form-control '
=======
        classValue='passwordValue form-control'
        visibility="input-group-append"
>>>>>>> 477f07ecbf46075cf47f0dbcbafabfcccaccbcd8
      />
      <button data-testid='login' type="submit" className='btn btn-color'>Ingresar</button>
      {err}
    </form>
  )
}

export default Form;