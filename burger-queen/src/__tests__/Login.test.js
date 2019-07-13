import React from 'react';
import Login from '../components/Login';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react';

it("router validation", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] })
  const renderWithRouter = (ui) => {
    return render(<Router history={history}>{ui}</Router>)
  }

  const { getByPlaceholderText, getByText } = renderWithRouter(<Login />);
  
  const fakeUser = { email: 'emily@gmail.com', password: '1234AbcD' }
  fakeUser.email = getByPlaceholderText('Email').value;
  fakeUser.password = getByPlaceholderText('Password').value;
  const submitBtn = getByText('Ingresar');
  
  expect(history.location.pathname).toBe("/");

  fireEvent.submit(submitBtn)
  waitForElementToBeRemoved(() =>
  document.querySelector('div.getOuttaHere')
).
  setTimeout(() => {
    
    expect(history.location.pathname).toBe("/home");
  }, 2000);
});
