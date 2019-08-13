import React from 'react';

const Add = () => {
  return (
    <form action="">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input id="password" type="text" />
      </div>
      <label>Admin:</label> <br />
      <div className="form-check form-check-inline">
        <input className="form-check-input" id="true" type="radio" name="admin" value="true" />
        <label className="form-check-label" htmlFor="true">
          Sí
      </label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" id="false" type="radio" name="admin" value="false" />
        <label className="form-check-label" id="false" htmlFor="false">
          No
      </label>
      </div>
    </form>
  )
};

export default Add;