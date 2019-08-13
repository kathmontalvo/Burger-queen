import React, { useEffect, useState } from 'react';
import Header from '../Header';
import getUsers from '../../controller/users/get-total'

const Admin = (props) => {
  const [user, setUser] = useState([])
  useEffect(() => {
    getUsers(localStorage.getItem('token'))
    .then(data => setUser(data))
  })
  return (
    <section className='w-100'>
      <Header />
      <h3>Lista de trabajadores</h3>
      <div>
        {user!==0 && user.map((el) => <div>{el.email}</div>)}
      </div>
      <button>ELiminar</button>
      <button>Agregar</button>
    </section>
  )
}

export default Admin;