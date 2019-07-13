import React from 'react';
import Login from '../components/Login';
import Home from '../components/Home';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent, waitForElementToBeRemoved, getByTestId, waitForElement, queryByTestId } from '@testing-library/react';
import nock from 'nock';
nock('http://localhost:6000')
  .post('/auth', { email: 'emily@gmail.com', password: '1234AbcD' })
  .reply(200, { token: 'asldkjaskldmaslkd123123ssladñs' })
  .persist()

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

it("router validation", async() => {
  const history = createMemoryHistory({ initialEntries: ["/"] })
  const renderWithRouter = (ui) => {
    return render(<Router history={history}>{ui}</Router>)
  }

  const { getByPlaceholderText, getByText, queryByText } = renderWithRouter(<Login />);
  
  const fakeUser = { email: 'emily@gmail.com', password: '1234AbcD' }
  fakeUser.email = getByPlaceholderText('Email').value;
  fakeUser.password = getByPlaceholderText('Password').value;
  const submitBtn = getByText('Ingresar');
  
  expect(history.location.pathname).toBe("/");



  fireEvent.submit(submitBtn)
  setTimeout(()=>{
    expect(history.location.pathname).toBe("/home");
  }, 2000)
  
});
