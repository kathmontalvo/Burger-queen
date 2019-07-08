import React, { useState } from 'react'
// eslint-disable-next-line
import { Router, Route, Link } from 'react-router-dom';
import Inputs from './Input'
import {createBrowserHistory} from 'history'

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitInfo = (e) => {
    e.preventDefault()
    console.log(createBrowserHistory)
    createBrowserHistory.push('/home')
  }
  return (
    <form onSubmit={submitInfo} className="col-12 flex-column d-flex form-group">
      <h3 className="py-5">Iniciar sesión</h3>
      <Inputs
        type='email'
        value={email}
        update={updateEmail}
        placeholder='Email'
        icon='fas fa-user' />
      <Inputs
        type='password'
        value={password}
        update={updatePassword}
        placeholder='Password'
        icon='fas fa-lock'
      />
      <button type="submit">
      {/* <Link to='/home' className='btn btn-color'>Ingresar</Link> */}
      ingresar
      </button>
    </form>
  )
}

export default Form;