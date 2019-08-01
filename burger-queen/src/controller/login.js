
const getToken = (email, password) => {

  return fetch('http://localhost:5000/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'email': email, 'password': password })
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 400) {
      return Promise.reject({ message: 'Ingrese correctamente su usuario y/o contraseña' })
    }
    return Promise.reject({ message: resp.statusText })
  })
};

export default getToken