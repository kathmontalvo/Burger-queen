import React from 'react';
import Form from '../components/Form';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from '@testing-library/react';
import Home from '../components/Home'
import nock from 'nock';
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

nock('http://localhost:5000')
  .post('/auth', { email: 'user1@gmail.com', password: 'password000' })
  .reply(200, { token: 'asldkjaskldmaslkd123123ssladñs' })
  .persist()

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

const fetches=()=>{  fetch('http://localhost:5000/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'email': 'user1@gmail.com', 'password': 'password000' })
  })
    .then(resp => resp.json())
    .then((res) => {
      expect(res.token).toBe('asldkjaskldmaslkd123123ssladñs')
    })
}

it('submit event ', () => {
  const onSubmit = fetches
  const { container, getByText } = renderWithRouter(<Form onSubmit={onSubmit} />);
  const { getByTestId } = renderWithRouter(<Home />);
  expect(container.innerHTML).toMatch('Iniciar sesión')
  const leftClick = {button: 0}
  fireEvent.click(getByText('Ingresar'), leftClick)
  expect(getByTestId('home').textContent).toMatch('Home')
})