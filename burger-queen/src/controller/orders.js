const postOrders = (client, products, token, userId) => {
    return fetch('http://localhost:5000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ 'userId': userId, 'client': client, 'products': products})
  }).then((resp)=> {
      return resp.json()
  })

}
export default postOrders;