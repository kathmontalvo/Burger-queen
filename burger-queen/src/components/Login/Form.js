import React, { useState } from 'react'
// eslint-disable-next-line
import Inputs from '../Input'
import GetToken from '../../controller/login';
const Form = ({logprop}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <form onSubmit={e => {
      e.preventDefault()

      GetToken(email,password, (err) => {
          if (err) {
            return setErr(err.message)
          }
        },logprop
      );
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
      {err && <p data-testid="errMsg" className='pt-3 text-danger'>*{err}</p>}
    </form>
  )
}

export default Form;