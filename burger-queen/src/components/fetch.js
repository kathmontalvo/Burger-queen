
const MyFetch = (endpoint, method, token, callback) => {
  return fetch(`http://localhost:5000/${endpoint}`,
    {
      method: `${method}`,
      headers: token,
    })
    .then(resp => resp.json())
    .then(callback);
}
export default MyFetch