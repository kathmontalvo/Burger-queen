const editStatus = (client, products, token, userId, status, id) => {
  return fetch(`http://165.22.166.131:8080/orders/${id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ 'userId': userId, 'client': client, 'products': products, 'status': status })
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } else if (resp.status === 400) {
      return Promise.reject({ message: 'Propiedad inválidad a modificar' })
    } else if (resp.status === 401) {
      return Promise.reject({ message: 'No existe token válido' })
    } else if (resp.status === 404) {
      return Promise.reject({ message: 'Orden inválida' })
    }
    return Promise.reject({ message: resp.statusText })
  })

}
export default editStatus;