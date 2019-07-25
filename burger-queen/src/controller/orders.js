const postOrders = ({client, products}) => {

    fetch('http://localhost:5000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + localStorage.getItem('token')
    },
    body: JSON.stringify({ 'userId': localStorage.getItem('user')._id, 'client': client, 'products': products})
  }).then((resp)=> {
      return resp.json()
  }).then((order) => {
        localStorage.setItem('order', JSON.stringify(order))
        console.log(JSON.parse(localStorage.getItem('order')))
    }).catch(console.error)

}
export default postOrders;