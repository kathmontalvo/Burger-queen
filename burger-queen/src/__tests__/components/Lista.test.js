import React from 'react';
import Lista from '../../components/Products/Lista';
import { fireEvent, cleanup, act } from '@testing-library/react';
import { renderWithRouter } from '../utils'
import controller from '../../controller/products'

afterEach(cleanup);
it('lista de productos test', () => {
  const { getByTestId } = renderWithRouter(<Lista
    item={{
      _id: '12',
      qty: 1,
      productId: 'xAb',
      name: 'Café',
      price: '5'
    }} />)
  expect(getByTestId('Café').textContent).toBe('Café')
  expect(getByTestId('qty').innerHTML).toBe(1)
})

it('increasing item', () => {
  const { getByTestId } = renderWithRouter(<Lista
    item={{
      _id: '12',
      qty: 1,
      productId: 'xAb',
      name: 'Café',
      price: '5'
    }} increase={controller.increase([{
      _id: '12',
      qty: 1,
      productId: 'xAb',
      name: 'Café',
      price: '5'
    }], '12')}
/>)
console.log(controller.increase([{
  _id: '12',
  qty: 1,
  productId: 'xAb',
  name: 'Café',
  price: '5'
}], '12'))
expect(getByTestId('qty').textContent).toBe(1)
const increase = getByTestId('addQty');

  act(() => {
    fireEvent.click(increase)
  })
expect(getByTestId('qty').textContent).toBe(2)

})

it('decreasing item', () => {
  const { getByTestId } = renderWithRouter(<Lista
    item={{
      _id: '12',
      qty: 2,
      productId: 'xAb',
      name: 'Café',
      price: '5'
    }} decrease={()=>{
      return {_id: '12', qty:2}
    }}
/>)
const decrease = getByTestId('takeQty');
  act(() => {
    fireEvent.click(decrease)
  })
expect(getByTestId('qty').textContent).toBe(1)

})

it('deleting item', () => {
  const { getByTestId } = renderWithRouter(<Lista
    item={{
      _id: '12',
      qty: 2,
      productId: 'xAb',
      name: 'Café',
      price: '5'
    }} remove={()=>{
      return {_id: '12'}
    }}
/>)
const deleteItem = getByTestId('deleteItem');
  act(() => {
    fireEvent.click(deleteItem)
  })
expect(getByTestId('qty').textContent).toBe(0)

})

