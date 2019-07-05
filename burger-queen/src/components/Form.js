import React, { useState }from 'react'

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
  }
  return (
    <form onSubmit = {submitInfo} className="col-12 flex-column d-flex form-group">
     <label>Email
      <input
        className ="form-control"
        id="email"
        value={email}
        onChange={updateEmail}
        type="email"
        placeholder="Email" />
        </label>
      <label>Password
      <input
        className ="form-control"
        id="password"
        value={password}
        onChange={updatePassword}
        type="password"
        placeholder="Password" />
        </label>
      <button className="btn" type="submit">Ingresar</button>

    </form>
  )
}

export default Form;