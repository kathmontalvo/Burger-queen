const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    cb()
  },
};

const GetToken = (email, password, cbSetRef, error) => {

  fetch('http://localhost:5000/auth', {
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
};

export default GetToken