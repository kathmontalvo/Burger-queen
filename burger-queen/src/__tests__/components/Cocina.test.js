import React from 'react';
import ReactDOM from 'react-dom';
import Cocina from '../../components/Cocina';
import { fireEvent, cleanup, act, waitForElement, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { renderWithRouter, history } from '../utils'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

afterEach(cleanup);

it('testing pending to delivering', async (done) => {
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
      "dateEntry": "December 17, 1995 03:28:00",
    }
    ])
    .put('/orders/1', {
      'userId': '1',
      'client': 'John',
      'products': [
        {
          "product": {
            "productId": "ABC12",
            "name": "Café americano",
            "price": 5
          },
          "qty": "5"
        }
      ],
      'status': 'delivering'
    })
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
      "status": "delivering",
      "dateEntry": "December 17, 1995 03:24:00",
    }]
    )
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
      "status": "delivering",
      "dateEntry": "December 17, 1995 03:24:00",
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
      "dateEntry": "December 17, 1995 03:28:00",
    }
    ]);

  const { getByTestId, getByText } = renderWithRouter(<Cocina />);

  await waitForElement(() => getByTestId('1'))

  expect(getByTestId('John').textContent).toBe('Cliente: John')

  expect(getByTestId('ABC12').value).toBe('on')

  act(() => {
    fireEvent.change(getByTestId('ABC12'), { target: { value: 'off' } })
  })
  expect(getByTestId('ABC12').value).toBe('off')
  expect(getByTestId('name-John').value).toBe('pending')
  fireEvent.change(getByTestId('name-John'), { target: { value: 'delivering' } });
  // fireEvent.click(getByTestId('delivering-John'))

  setTimeout(() => {
    expect(getByTestId('name-John').value).toBe('delivering')
    done()
  }, 3000)

});

it('testing delivering to pending', async (done) => {
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
      "status": "delivering",
      "dateEntry": "December 17, 1995 03:20:00",
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
      "dateEntry": "December 17, 1995 03:14:00",
    }
    ])
    .put('/orders/1', {
      'userId': '1',
      'client': 'John',
      'products': [
        {
          "product": {
            "productId": "ABC12",
            "name": "Café americano",
            "price": 5
          },
          "qty": "5"
        }
      ],
      'status': 'pending'
    })
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
      "dateEntry": "December 17, 1995 03:20:00",
    }]
    )
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
      "dateEntry": "December 17, 1995 03:20:00",
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
      "dateEntry": "December 17, 1995 03:14:00",
    }
    ]);
  const { getByTestId, getByText } = renderWithRouter(<Cocina />);

  await waitForElement(() => getByTestId('1'))

  expect(getByTestId('John').textContent).toBe('Cliente: John')
  expect(getByTestId('name-John').value).toBe('delivering')

  fireEvent.change(getByTestId('name-John'), { target: { value: 'pending' } });

  // fireEvent.click(getByTestId('delivering-John'))
  setTimeout(() => {
    expect(getByTestId('name-John').value).toBe('pending')
    done()
  }, 3000)

});


it('testing comp change (Pendientes- entregados)', async (done) => {
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
      "status": "delivered",
      "dateEntry": "December 17, 1995 03:28:00",
      "dateProcessed": "December 17, 1995 03:34:00",
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
      "status": "pending",
      "dateEntry": "December 17, 1995 03:24:00",
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
      "status": "delivered",
      "dateEntry": "December 17, 1995 03:28:00",
      "dateProcessed": "December 17, 1995 03:34:00",
    }
    ])



  const { getByTestId, getByText } = renderWithRouter(<Cocina />);

  await waitForElement(() => getByTestId('1'))

  expect(getByTestId('John').textContent).toBe('Cliente: John')

  act(() => {
    fireEvent.click(getByTestId('Entregados'))
  })

  await waitForElement(() => getByTestId('2'))

  setTimeout(() => {
    expect(getByTestId('name-Ana').value).toBe('delivered')
    done()
  }, 3000)
});

it('testing comp change (Entregados - pendientes)', async (done) => {
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
      "status": "delivered",
      "dateEntry": "December 17, 1995 03:24:00",
      "dateProcessed": "December 17, 1995 03:34:00",
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
      "status": "pending",
      "dateEntry": "December 17, 1995 03:24:00",
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
      "status": "delivered",
      "dateEntry": "December 17, 1995 03:24:00",
      "dateProcessed": "December 17, 1995 03:34:00",
    }
    ])

  const { getByTestId, getByText } = renderWithRouter(<Cocina />);

  await waitForElement(() => getByTestId('1'))

  expect(getByTestId('John').textContent).toBe('Cliente: John')

  act(() => {
    fireEvent.click(getByTestId('Entregados'))
  })
  await waitForElement(() => getByTestId('2'))

  act(() => {
    fireEvent.click(getByTestId('Pendientes'))
  })
  await waitForElement(() => getByTestId('1'))

  setTimeout(() => {
    expect(getByTestId('name-John').value).toBe('pending')
    done()
  }, 3000)

});

it('testing comp change (Entregados - pendientes)', async (done) => {
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
      "status": "delivered",
      "dateEntry": "December 17, 1995 03:24:00",
      "dateProcessed": "December 17, 1995 03:34:00",
    },
    {
      "_id": "3",
      "userId": "1",
      "client": "Carl",
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
      "status": "pending",
      "dateEntry": "December 17, 1995 03:24:00",
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
      "status": "delivered",
      "dateEntry": "December 17, 1995 03:24:00",
      "dateProcessed": "December 17, 1995 03:34:00",
    },
    {
      "_id": "3",
      "userId": "1",
      "client": "Carl",
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
    }
    ])

  const { getByTestId, getByText } = renderWithRouter(<Cocina />);

  await waitForElement(() => getByTestId('1'))

  expect(getByTestId('John').textContent).toBe('Cliente: John')

  act(() => {
    fireEvent.click(getByTestId('Entregados'))
  })
  await waitForElement(() => getByTestId('2'))

  act(() => {
    fireEvent.click(getByTestId('Pendientes'))
  })
  await waitForElement(() => getByTestId('1'))

  setTimeout(() => {
    expect(getByTestId('name-John').value).toBe('pending')
    done()
  }, 3000)

});
