const createUser = (token, email, password, admin) => {
  return fetch('http://165.22.166.131:8080/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      'email': email,
      'password': password,
      'roles': {
        admin: admin
      }
    })
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 400) {
      return Promise.reject({ message: 'Ingresar correo y/o contraseña válidos' })
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'No hay cabecera de autenticación' })
    } else if (resp.status === 403) {
      return Promise.reject({ message: 'Email ingresado ya existe. Intente otra vez.' })
    } else {
      return Promise.reject({ message: resp.statusText })
    }
  }
  )
}

export default createUser;