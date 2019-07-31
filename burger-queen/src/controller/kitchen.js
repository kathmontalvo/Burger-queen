const getOrders = ()=>{
    return fetch('http://localhost:5000/orders?page=1&limit=10', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + localStorage.getItem('token')
        },
      }).then((resp)=> {
          return resp.json()
        }
      ).then(console.log)
}

export default getOrders;