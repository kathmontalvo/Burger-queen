
import fetchMock from 'fetch-mock'

fetchMock.post('*', {'hello': 'world'})
const GetAuth = () =>{
    const myInit = {
        method: 'POST',
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
          }),
    }
    fetchMock('/auth', myInit).then((res)=>{res.json()})
    .then((data)=>{console.log(data)})
}

export default GetAuth;