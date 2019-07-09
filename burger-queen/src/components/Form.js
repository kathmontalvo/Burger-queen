import React, { useState } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Inputs from './Input'
import MyFetch from './fetch';


const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitInfo = (e) => {
    console.log('hi')
    e.preventDefault()
    // MyFetch('users/403', 'GET', { "Authorization": "Bearer kndcbukwe12" }, (e) => {
    //   if(e){
    //     setErr('Error: Necesitas ser administrador')
    //   }
    // })
    
     MyFetch('users/401', 'GET', { "Authorization": "Bearer kndcbukwe12" }, (e) => {
      if(e){
        console.log(e)
        setErr(<p className="alert alert-danger">Error: No existe autenticación</p>)
      }
    })
  }

  return (
    <form onSubmit={submitInfo} className="col-12 flex-column d-flex form-group">
      <h3 className="medium">Iniciar sesión</h3>
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
      <Link to='/home' className='btn btn-color'>Ingresa</Link>
      </button>
      {err}
    </form>
  )
}

export default Form;