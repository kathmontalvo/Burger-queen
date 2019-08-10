import React from 'react';
import ReactDOM from 'react-dom';
import Cocina from '../../components/Cocina';
import getOrder from '../../controller/orders/getOrder'
import { fireEvent, cleanup, act, waitForElement, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import { renderWithRouter, history } from '../utils'

import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

nock('http://165.22.166.131:8080')
  .get('/orders')
  .reply(200, [{
    "_id": "1",
    "userId": "1",
    "client": "John",
    "products": [
      {
        "product": {
          "productId": "ABC12",
          "name": "Café americano",
          "price": 5
        },
        "qty": "5"
      }
    ],
    "status": "pending",
    "dateEntry": "December 17, 1995 03:24:00",
    "dateProcessed": "December 17, 1995 03:24:00"
  },
  {
    "_id": "2",
    "userId": "1",
    "client": "Ana",
    "products": [
      {
        "product": {
          "productId": "ABC17",
          "name": "Café con leche",
          "price": 7
        },
        "qty": "5"
      }
    ],
    "status": "pending",
    "dateEntry": "December 17, 1995 03:24:00",
    "dateProcessed": "December 17, 1995 03:24:00"
  }
  ])
  .get('/orders')
  .reply(200, [{
    "_id": "1",
    "userId": "1",
    "client": "John",
    "products": [
      {
        "product": {
          "productId": "ABC12",
          "name": "Café americano",
          "price": 5
        },
        "qty": "5"
      }
    ],
    "status": "delivered",
    "dateEntry": "December 17, 1995 03:24:00",
    "dateProcessed": "December 17, 1995 03:24:00"
  },
  {
    "_id": "2",
    "userId": "1",
    "client": "Ana",
    "products": [
      {
        "product": {
          "productId": "ABC17",
          "name": "Café con leche",
          "price": 7
        },
        "qty": "5"
      }
    ],
    "status": "pending",
    "dateEntry": "December 17, 1995 03:24:00",
    "dateProcessed": "December 17, 1995 03:24:00"
  }
  ])
  ;

it.only('testing cocina comp', async (done) => {
  nock('http://165.22.166.131:8080')
    .put('/orders/1', {
      'userId': '1',
      'client': 'John',
      'products': [
        {
          "product": {
            "name": "Café americano",
            "price": 5,
            "productId": "ABC12"
          },
          "qty": "5"
        }
      ],
      'status': 'delivering'
    })
  .reply(200, [
    {
      "_id": "1",
      "userId": "1",
      "client": "John",
      "products": [
        {
          "product":{
            "name":"Café americano",
            "price": 5,
            "productId": "ABC12"
          },
          "qty": "5"
        }
      ],
      "status": "delivered",
      "dateEntry": "December 17, 1995 03:24:00",
      "dateProcessed": "December 17, 1995 03:24:00"
    }
  ])
  const { getByTestId, getByText } = renderWithRouter(<Cocina />);

  const { getByTestId } = renderWithRouter(<Cocina />);
  await waitForElement(() => getByTestId('1'))

  expect(getByTestId('John').textContent).toBe('Cliente: John')

  expect(getByTestId('ABC12').value).toBe('on')

  act(() => {
    fireEvent.change(getByTestId('ABC12'), { target: { value: 'off' } })
  })
  expect(getByTestId('ABC12').value).toBe('off')
  // expect(getByTestId('Café americano')).toHaveAttribute('text-decoration: line-through')
  expect(getByTestId('name-John').value).toBe('pending')

    fireEvent.click(getByTestId('delivered-John'))
    //  fireEvent.change(getByTestId('name-John'), { target: { value: 'delivered' } })
  setTimeout(() => {
    expect(getByTestId('name-John').value).toBe('delivered')
    done()
  }, 4000)
  
})