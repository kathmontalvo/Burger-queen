const getUser = ()=>{
    return fetch('http://localhost:5000/users/1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + localStorage.getItem('token')
        }
      }).then((resp)=> {
          return resp.json()
        }
      )
}

export default getUser;