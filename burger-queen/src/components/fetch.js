
const MyFetch = (endpoint, method, token)=>{
    return fetch(`http://localhost:5000/${endpoint}`,
    {
        method: `${method}`,
        headers:  token,
    })
    .then(resp => resp.json()).then(console.log)
}
export default MyFetch