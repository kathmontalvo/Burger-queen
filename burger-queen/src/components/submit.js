const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    cb()
  },
};

const GetToken = (email, password, setReferrer, error) => {

  fetch('http://localhost:5000/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'email': email, 'password': password })
  }).then(resp => resp.json())
    .then((res) => {
      if (res.token) {
        fakeAuth.authenticate(() => {
          return setReferrer
        });
        localStorage.setItem('token', res.token)
        console.log(localStorage.getItem('token'))
      }
    }).catch((err) => {
      if (err) {
        return error
      }
    })
};

export default GetToken