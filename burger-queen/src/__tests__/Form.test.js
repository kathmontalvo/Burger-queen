import React from 'react';
import Form from '../components/Form';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

const renderWithRouter = (ui, {
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
} = {}) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

it('submit event ', () => {
  const onSubmit = jest.fn()
  const { getByTestId } = renderWithRouter(<Form onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
})

it('changes state of inputs ', () => {
  const fakeUser = {email: 'emily@gmail.com', password: '1234AbcD'}
  const onSubmit = jest.fn()
  const { getByPlaceholderText, getByText } = renderWithRouter(<Form onSubmit={onSubmit}/>);

  const email = getByPlaceholderText('Email');
  const password = getByPlaceholderText('Password');
  const submitBtn = getByText('Ingresar')

  email.value = fakeUser.email
  password.value = fakeUser.password
  fireEvent.click(submitBtn)

  expect(onSubmit).toHaveBeenCalledWith(fakeUser);
})