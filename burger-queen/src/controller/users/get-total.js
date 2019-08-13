const getTotal = (token) => {
  return fetch('http://165.22.166.131:8080/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'No hay cabecera de autenticación' })
    } else if (resp.status === 403) {
      return Promise.reject({ message: 'Debes ser admin para acceder' })
    } else {
      return Promise.reject({ message: resp.statusText })
    }
  }
  )
}

export default getTotal;