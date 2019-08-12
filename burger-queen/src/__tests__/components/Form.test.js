import React from 'react';
import Form from '../../components/Login/Form';
import { fireEvent, cleanup, act, waitForElement, getByTestId } from '@testing-library/react';
// import submit from '../../controller/login';
import { renderWithRouter, history } from '../utils'
import nock from 'nock';
afterEach(cleanup);

// jest.mock('../../controller/login')




it("router validation", async() => {
  nock('http://165.22.166.131:8080')
  .post('/auth', { email: 'emily@gmail.com', password: '1234AbcffffffffffD' })
  .reply(200, { token: 'asldkjaskldmaslkd123123ssladñs' })
  .get('/users/emily@gmail.com')
  .reply(200, [{
    "_id": 1,
    "email": "emily@gmail.com",
    "roles": {
      "admin": false
    }
  }
  ])

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

  // expect(historyMock.push.mock.calls[0]).toEqual([ ("/home")]);
  // expect(submit.mock.calls).toHaveLength(1)
  // expect(submit.mock.calls[0][0]).toBe('emily@gmail.com')
  // expect(submit.mock.calls[0][1]).toBe('1234AbcffffffffffD')
});

it("router validation", async() => {
  nock('http://165.22.166.131:8080')
  .post('/auth', { email: 'emily@gmail.com', password: '1234AbfffffffffD' })
  .reply(400, { message: 'Ingrese correctamente su usuario y/o contraseña' })
  .get('/users/emily@gmail.com')
  .reply(401, { message: 'Unauthorized' })
  const { getByText, getByTestId } = renderWithRouter(<Form />);
  const submitBtn = getByText('Ingresar');
  try {
    getByTestId('errMsg')
  } catch(e) {
    expect(e.message.startsWith('Unable to find an element by: [data-testid=\"errMsg\"]')).toBe(true)
  }

  act(() => {
    fireEvent.submit(submitBtn)
  })
  const errMsg = await waitForElement(() => getByTestId('errMsg'))
  expect(errMsg.textContent).toBe('*Ingrese correctamente su usuario y/o contraseña')
});