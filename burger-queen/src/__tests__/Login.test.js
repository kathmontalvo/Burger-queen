import React from 'react';
import Login from '../components/Login';
import Home from '../components/Home';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent, waitForElementToBeRemoved, act, getByTestId, waitForElement, queryByTestId } from '@testing-library/react';

import submit from '../components/submit';

/*import nock from 'nock';
nock('http://localhost:6000')
  .post('/auth', { email: 'emily@gmail.com', password: '1234AbcD' })
  .reply(200, { token: 'asldkjaskldmaslkd123123ssladñs' })
  .persist()

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))
*/

jest.mock('../components/submit')

it("router validation", async() => {
  const history = createMemoryHistory({ initialEntries: ["/"] })
  const renderWithRouter = (ui) => {
    return render(<Router history={history}>{ui}</Router>)
  }

  const { getByPlaceholderText, getByText, queryByText } = renderWithRouter(<Login />);
  
  const fakeUser = { email: 'emily@gmail.com', password: '1234AbcffffffffffD' }
  getByPlaceholderText('Email').value = fakeUser.email;
  getByPlaceholderText('Password').value = fakeUser.password;
  const submitBtn = getByText('Ingresar');
  
  expect(history.location.pathname).toBe("/");
  act(() => {
    fireEvent.submit(submitBtn)
  })

  expect(submit.mock.calls).toHaveLength(1)
  expect(submit.mock.calls[0][0]).toBe(fakeUser.email)
  expect(submit.mock.calls[0][1]).toBe(fakeUser.password)
  expect(typeof submit.mock.calls[0][2]).toBe('function')
});
