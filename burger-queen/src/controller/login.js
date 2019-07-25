
import auth from './routes/auth'
const GetToken = async (email, password, error, logprop) => {

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
        auth.login(()=>{logprop.history.push("/home")})
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