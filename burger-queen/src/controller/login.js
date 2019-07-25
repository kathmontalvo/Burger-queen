const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    cb()
  },
};

const GetToken = async (email, password, cbSetRef, error) => {

  await fetch('http://localhost:5000/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'email': email, 'password': password })
  }).then((resp)=> {
    if(resp.status===200){
      return resp.json()
    }
  }).then((res) => {
      if (res.token) {
        fakeAuth.authenticate(cbSetRef);
        localStorage.setItem('token', res.token)
        console.log(localStorage.getItem('token'))
      }
    }).catch(error)

    fetch('http://localhost:5000/users/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + localStorage.getItem('token')
    }
  }).then((resp)=> {
      return resp.json()
    }
  ).then(async(data) => {
       await localStorage.setItem('user', data[0])
        console.log(localStorage.getItem('user'))
      }
  ).catch(error)

};

export default GetToken