const getUser = (uid) => {
  return fetch(`http://localhost:5000/users/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + localStorage.getItem('token')
    }
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else {
      return Promise.reject({ message: resp.statusText })
    }
  }
  )
}

export default getUser;