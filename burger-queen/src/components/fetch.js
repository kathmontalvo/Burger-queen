
const MyFetch = (endpoint, method, token, callback) => {
  return fetch(`http://localhost:5000/${endpoint}`,
    {
      method: `${method}`,
      headers: token,
    })
    .then(resp => resp.json()).then(console.log)
    .catch(callback);
}
export default MyFetch