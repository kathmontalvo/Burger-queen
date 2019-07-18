import React from 'react';
import Form from '../components/Login/Form';
import { fireEvent, cleanup, act } from '@testing-library/react';
// import nock from 'nock';
import submit from '../controller/Login';
import { renderWithRouter, history } from './utils';

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


jest.mock('../controller/Login')

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
  const { getByPlaceholderText, getByText } = renderWithRouter(<Form onSubmit={submit}/>);
  
  // const fakeUser = { email: '', password: '' }
  // getByPlaceholderText('Email').value = fakeUser.email;
  // getByPlaceholderText('Password').value = fakeUser.password;
  const submitBtn = getByText('Ingresar');


  expect(history.location.pathname).toBe("/");
  act(() => {
    try {
    
      fireEvent.submit(submitBtn)
    } catch(e) {
      console.log(submit.mock.results[1])
      expect(submit).toThrow('Error')
      expect(submit.mock.calls).toHaveLength(0)
    
      // expect(submit.mock.calls[0][0]).toBe(fakeUser.email)
      // expect(submit.mock.calls[0][1]).toBe(fakeUser.password)
      expect(typeof submit.mock.calls[0][2]).toBe('function')
    }
  })
  

});