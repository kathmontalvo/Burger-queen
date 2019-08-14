import React from 'react';
import Products from '../../components/Products/';
import { fireEvent, cleanup, act, waitForDomChange, waitForElement } from '@testing-library/react';
import { renderWithRouter } from '../utils';
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'))

nock('http://165.22.166.131:8080')
  .get('/products')
  .reply(200, [{
    "_id": "1",
    "name": "Café americano",
    "price": 5,
    "image": "https://i.ibb.co/Yfbp5kY/cafe-americano.png",
    "type": "Desayuno",
    "dateEntry": "December 17, 1995 03:24:00"
  },
  {
    "_id": "2",
    "name": "Café con leche",
    "price": 7,
    "image": "https://i.ibb.co/rGMbTtB/cafe-leche.png",
    "type": "Desayuno",
    "dateEntry": "December 17, 1995 03:24:00"
  }
  ])
  .post('/orders', {
    'userId': '1',
    'client': 'Mariano',
    'products': [
      {
        "product": "1",
        "qty": 1
      }
    ]
  })
  .reply(200, [
    {
      "_id": "1",
      "userId": "1",
      "client": "Mariano",
      "products": [
        {
          "product": {
            "name": "Café americano",
            "price": 5,
            "productId": "1"
          },
          "qty": 5
        }
      ],
      "status": "pending",
      "dateEntry": "December 17, 1995 03:24:00",
    }
  ]).persist();

afterEach(cleanup);

const spy = jest.spyOn(Storage.prototype, 'setItem');
localStorage.setItem = spy;
localStorage.setItem('user', JSON.stringify({ admin: false, _id: "1" }));

it('testing prods', async (done) => {
  // nock('http://165.22.166.131:8080')
  // .get('/products')
  // .reply(200, [{
  //   "_id": "1",
  //   "name": "Café americano",
  //   "price": 5,
  //   "image": "https://i.ibb.co/Yfbp5kY/cafe-americano.png",
  //   "type": "Desayuno",
  //   "dateEntry": "December 17, 1995 03:24:00"
  // },
  // {
  //   "_id": "2",
  //   "name": "Bebida/gaseosa 750ml",
  //   "price": 10,
  //   "image": "https://i.ibb.co/rGMbTtB/cafe-leche.png",
  //   "type": "Almuerzo",
  //   "dateEntry": "December 17, 1995 03:24:00"
  // }
  // ])
  const { getByTestId, getByPlaceholderText } = renderWithRouter(<Products />);

  await waitForElement(() => getByTestId('opt'))
    act(()=>{
      fireEvent.click(getByTestId('Almuerzo'))
    })

  await waitForElement(() => getByTestId('2'))
  // expect(getByTestId('opt')).toBe(getByTestId('AlmuerzoProd'))
  // await waitForElement(() => getByTestId('AlmuerzoProd'))
setTimeout(()=>{
  expect(getByTestId('2').textContent).toBe('Bebida/gaseosa 750ml');
  done()
}, 2000)

})

it('testing prods', async () => {

  const { getByTestId, getByPlaceholderText } = renderWithRouter(<Products />);

  await waitForElement(() => getByTestId('1'))
  act(() => {
    fireEvent.click(getByTestId('1'))
  })
  await waitForElement(() => getByTestId('list-1'))

  expect(getByTestId('list-Café americano').textContent).toBe('Café americano');
})

it('testing prods', async () => {

  const { getByTestId, getByPlaceholderText } = renderWithRouter(<Products />);

  const clientName = await getByPlaceholderText('Nombre')
  expect(clientName.value).toBe('');
  act(() => {
    fireEvent.change(clientName, { target: { value: 'Mariano' } });
  })
  expect(clientName.value).toBe('Mariano');

  try {
    getByTestId('edit')
  } catch (e) {
    expect(e.message.startsWith('Unable to find an element by: [data-testid=\"edit\"]')).toBe(true)
  }

  act(() => {
    fireEvent.click(getByTestId('submit'))
  })
  const editName = await waitForElement(() => getByTestId('change-name'))

  expect(editName.textContent).toBe('Mariano');

  act(() => {
    fireEvent.click(getByTestId('edit'))
  })
  await waitForElement(() => clientName)
  expect(clientName.value).toBe('Mariano');
})

it('testing post prods', async (done) => {
  const { getByTestId, getByPlaceholderText } = renderWithRouter(<Products />);

  await waitForElement(() => getByTestId('1'))
  act(() => {
    fireEvent.click(getByTestId('1'))
  })
  await waitForElement(() => getByTestId('list-1'))

  expect(getByTestId('list-Café americano').textContent).toBe('Café americano');

  const clientName = getByPlaceholderText('Nombre')

  expect(clientName.value).toBe('');
  act(() => {
    fireEvent.change(clientName, { target: { value: 'Mariano' } });
  })
  expect(clientName.value).toBe('Mariano');
  act(() => {
    fireEvent.click(getByTestId('submit'))
  })
  await waitForElement(() => getByTestId('edit'))

  act(() => {
    fireEvent.click(getByTestId('post-order'))
  })

  await waitForElement(() => clientName)
  setTimeout(() => {
    expect(clientName.value).toBe('');
    done();
  }, 1000)

})

it('add qty of prods', async () => {
  const { getByTestId } = renderWithRouter(<Products />);

  await waitForElement(() => getByTestId('1'))
  act(() => {
    fireEvent.click(getByTestId('1'))
  })
  await waitForElement(() => getByTestId('list-1'))

  expect(getByTestId('list-Café americano').textContent).toBe('Café americano');
  expect(getByTestId('qty').textContent).toBe('1');

  act(() => {
    fireEvent.click(getByTestId('addQty'))
  })
  expect(getByTestId('qty').textContent).toBe('2');

})

it('take qty of prods', async () => {
  const { getByTestId } = renderWithRouter(<Products />);

  await waitForElement(() => getByTestId('1'))
  act(() => {
    fireEvent.click(getByTestId('1'))
  })
  await waitForElement(() => getByTestId('list-1'))

  expect(getByTestId('list-Café americano').textContent).toBe('Café americano');
  expect(getByTestId('qty').textContent).toBe('1');

  act(() => {
    fireEvent.click(getByTestId('addQty'))
  })
  expect(getByTestId('qty').textContent).toBe('2');

  act(() => {
    fireEvent.click(getByTestId('takeQty'))
  })
  expect(getByTestId('qty').textContent).toBe('1');

})

it(' del prods', async () => {
  const { getByTestId } = renderWithRouter(<Products />);

  await waitForElement(() => getByTestId('1'))
  act(() => {
    fireEvent.click(getByTestId('1'))
  })
  await waitForElement(() => getByTestId('list-1'))

  expect(getByTestId('list-Café americano').textContent).toBe('Café americano');
  expect(getByTestId('qty').textContent).toBe('1');

  act(() => {
    fireEvent.click(getByTestId('deleteItem'))
  })

  try {
    getByTestId('list-Café americano')
  } catch (e) {
    expect(e.message.startsWith('Unable to find an element by: [data-testid=\"list-Café americano\"]')).toBe(true)
  }
})