
const MyFetch = (endpoint, config, callback, cbError) => {
  return fetch(`http://localhost:5000/${endpoint}`, config)
    .then(resp => resp.json())
    .then(callback)
    .catch(cbError)
}
export default MyFetch