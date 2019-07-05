import React, { useState } from 'react';

const Login = ({ button, title, bottomText, bottomTextanchor }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div>
      <div>
        <img src="" alt="burger-queen-logo"></img>
      </div>
      <form >
        <h2>{title}</h2>
        <input
          id="admin"
          value="admin"
          name="role"
          type="radio"
        />
        <label for="admin">Admin</label>
        <input
          id="meserx"
          value="meserx"
          name="role"
          type="radio"
        />
        <label for="meserx">Meserx</label>
        <label for="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={updateEmail}
          type="email"
          placeholder="Ingresar correo" />
        <label for="password">Password</label>
        <input
          id="password"
          value={password}
          onChange={updatePassword}
          type="password"
          placeholder="Ingresar contraseña" />
        <button type="submit">{button}</button>
        <p>{bottomText}<a href="#">{bottomTextanchor}</a></p>
      </form>
    </div>
  )
}
export default Login