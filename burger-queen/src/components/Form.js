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
    <form onSubmit = {submitInfo}>
     <label>Email
      <input
        id="email"
        value={email}
        onChange={updateEmail}
        type="email"
        placeholder="Ingresar correo" />
        </label>
      <label>Password
      <input
        id="password"
        value={password}
        onChange={updatePassword}
        type="password"
        placeholder="Ingresar contraseña" />
        </label>
      <button className="btn" type="submit">Ingresar</button>

    </form>
  )
}

export default Form;