const getUser = (uid) => {
  return fetch(`http://165.22.166.131:8080/users/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
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