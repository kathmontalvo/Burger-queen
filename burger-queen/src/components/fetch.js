// // // import fetchMock from 'fetch-mock'
// // const fetchMock = require('fetch-mock');
// // const nodeFetch = require('node-fetch');

// nodeFetch.default = fetchMock;

// const GetAuth = () => {
//   fetchMock.post('*', { 'hello': 'world' })

//   const myInit = {
//     method: 'POST',
//     // body: JSON.stringify({
//     //   firstParam: 'yourValue',
//     //   secondParam: 'yourOtherValue',
//     // }),
//   }

//   fetchMock.mock('/auth', 200);

//   console.log(fetchMock.fetchMock)
//   // fetchMock('/auth', myInit)
//   //   .then((res) =>  console.log(res) )
//   // .then((data) => { console.log(data) })
// }

// GetAuth()
// // export default GetAuth;