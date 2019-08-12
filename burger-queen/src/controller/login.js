const getToken = (email, password) => {

    return fetch('http://165.22.166.131:8080/auth' , {
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
  