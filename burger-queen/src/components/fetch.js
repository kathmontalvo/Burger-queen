
const MyFetch = (endpoint, config, callback) => {
  return fetch(`http://localhost:5000/${endpoint}`, config)
    .then(resp => resp.json())
    .then(callback);
}
export default MyFetch