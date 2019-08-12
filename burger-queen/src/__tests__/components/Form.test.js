import React from 'react';
import Form from '../../components/Login/Form';
import { fireEvent, cleanup, act, waitForElement, getByTestId } from '@testing-library/react';
// import submit from '../../controller/login';
import { renderWithRouter, history } from '../utils'
import nock from 'nock';
afterEach(cleanup);

// jest.mock('../../controller/login')

nock('http://165.22.166.131:8080')
.post('/auth', { email: 'user1@gmail.com', password: 'password000' })
.reply(200, { token: 'asldkjaskldmaslkd123123ssladñs' })
.get('/users/1')
.reply(200, [{
  "_id": 1,
  "email": "amy@gmail.com",
  "roles": {
    "admin": false
  }
}
]).persist();


it("router validation", async() => {

  const { getByPlaceholderText, getByText, getByTestId } = renderWithRouter(<Form />);
  
  expect(getByPlaceholderText('Email').value).toBe('')
  expect(getByPlaceholderText('Password').value).toBe('');
act(()=>{
  fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'emily@gmail.com' } })
  fireEvent.change(getByPlaceholderText('Password'), { target: { value: '1234AbcffffffffffD' } })
})

  expect(getByPlaceholderText('Email').value).toBe('emily@gmail.com')
  expect(getByPlaceholderText('Password').value).toBe('1234AbcffffffffffD');
  const submitBtn = getByText('Ingresar');
  // expect(history.location.pathname).toBe("/");
   act(() => {
    fireEvent.submit(submitBtn)
  })
  await waitForElement(() => getByTestId('ÓRDENES'))
expect(history.location.pathname).toBe('/home')
  // expect(submit.mock.calls).toHaveLength(1)
  // expect(submit.mock.calls[0][0]).toBe('emily@gmail.com')
  // expect(submit.mock.calls[0][1]).toBe('1234AbcffffffffffD')
});

// it("router validation", async() => {
//   const { getByText, getByTestId } = renderWithRouter(<Form onSubmit={submit}/>);
//   const submitBtn = getByText('Ingresar');
//   try {
//     getByTestId('errMsg')
//   } catch(e) {
//     expect(e.message.startsWith('Unable to find an element by: [data-testid=\"errMsg\"]')).toBe(true)
//   }

//   act(() => {
//     fireEvent.submit(submitBtn)
//   })
//   const errMsg = await waitForElement(() => getByTestId('errMsg'))
//   expect(errMsg.textContent).toBe('*Error desde mock')
// });