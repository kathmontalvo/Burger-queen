import React from 'react';
import Form from '../../components/Login/Form';
import { fireEvent, cleanup, act, waitForElement } from '@testing-library/react';
// import nock from 'nock';
import submit from '../../controller/login';
import { renderWithRouter, history } from '../utils'

afterEach(cleanup);

// it('submit event ', () => {
//   const onSubmit = jest.fn()
//   const { getByTestId } = renderWithRouter(<Form onSubmit={onSubmit} />);
//   fireEvent.submit(getByTestId("form"));
//   expect(onSubmit).toHaveBeenCalled();
// })

// nock('http://localhost:6000')
//   .post('/auth', { email: 'user1@gmail.com', password: 'password000' })
//   .reply(200, { token: 'asldkjaskldmaslkd123123ssladñs' })
//   .persist()

// jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))


jest.mock('../../controller/login')

it("router validation", async() => {
  const { getByPlaceholderText, getByText } = renderWithRouter(<Form onSubmit={submit}/>);
  
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

it("router validation", async() => {
  const { getByText, getByTestId } = renderWithRouter(<Form onSubmit={submit}/>);
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
  expect(errMsg.textContent).toBe('*Error desde mock')
});