import React from 'react';
import ReactDOM from 'react-dom';
import Admin from '../../components/Admin/index';
import { fireEvent, cleanup, act, waitForElement, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { renderWithRouter, history } from '../utils'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

afterEach(cleanup);
nock('http://165.22.166.131:8080')
.get('/users')
.reply(200, [{
  "_id": "1",
  "email": "amy@gmail.com",
  "roles": {
    "admin": false
  }
},
{
    "_id": "2",
    "email": "emily@gmail.com",
    "roles": {
      "admin": true
    }
  }
]).persist()
it('request 1',async ()=>{

    const { getByTestId, getByText } = renderWithRouter(<Admin />);

    await waitForElement(() => getByTestId('amy@gmail.com'))
  
    expect(getByTestId('amy@gmail.com').textContent).toBe('amy@gmail.com')

    act(()=>{
        fireEvent.click(getByTestId('Agregar'))
    })
    await waitForElement(() => getByTestId('form'))
    expect(getByTestId('email').textContent).toBe('Email:')

    expect(getByTestId('emailInput').value).toBe('')
  expect(getByTestId('passwordInput').value).toBe('');
  act(() => {
    fireEvent.change(getByTestId('emailInput'), { target: { value: 'emily@gmail.com' } })
    fireEvent.change(getByTestId('passwordInput'), { target: { value: '1234AbcffffffffffD' } })
  })

  expect(getByTestId('emailInput').value).toBe('emily@gmail.com')
  expect(getByTestId('passwordInput').value).toBe('1234AbcffffffffffD');

})