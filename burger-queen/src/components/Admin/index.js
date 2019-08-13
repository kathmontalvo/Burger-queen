import React, { useEffect, useState } from 'react';
import Header from '../Header';
import getUsers from '../../controller/users/get-total';
import List from './user-list';
import Add from './add'

const Admin = (props) => {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false)
  useEffect(() => {
    getUsers(localStorage.getItem('token'))
      .then(data => setUser(data))
  })
  return (
    <main className='w-100'>
      <Header logoutprop={props} />
      <h3>Lista de trabajadores</h3>
      <div>
        {user !== 0 && user.map((el) =>
          <div key={el._id} >
            <input id="list" type="checkbox" />
            <label htmlFor="list">
              <List user={el} />
            </label>
          </div>
        )}
      </div>
      <button>Eliminar</button>
      <button onClick={() => setShow(true)}>Agregar</button>
      <section>
        {show && <Add/>}
      </section>
    </main>
  )
}

export default Admin;