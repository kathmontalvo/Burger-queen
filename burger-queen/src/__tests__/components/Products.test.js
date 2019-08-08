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
  ]).persist();
afterEach(cleanup);


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
  fireEvent.change(clientName, { target: { value: 'Mariano' } });
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

it('testing post prods', async () => {

  const { getByTestId, getByPlaceholderText } = renderWithRouter(<Products />);

  await waitForElement(() => getByTestId('1'))
  act(() => {
    fireEvent.click(getByTestId('1'))
  })
  await waitForElement(() => getByTestId('list-1'))

  expect(getByTestId('list-Café americano').textContent).toBe('Café americano');

  const clientName = getByPlaceholderText('Nombre')

  expect(clientName.value).toBe('');
  fireEvent.change(clientName, { target: { value: 'Mariano' } });
  expect(clientName.value).toBe('Mariano');
  act(() => {
    fireEvent.click(getByTestId('submit'))
  })
  await waitForElement(() => getByTestId('edit'))

  act(() => {
    fireEvent.click(getByTestId('post-order'))
  })
  await waitForElement(() => clientName)
  expect(clientName.value).toBe('');
})

it('add qty of prods', async() => {
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

it('take qty of prods', async() => {
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

it(' del prods', async() => {
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