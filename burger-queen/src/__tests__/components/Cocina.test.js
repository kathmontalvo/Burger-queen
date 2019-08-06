import React from 'react';
import ReactDOM from 'react-dom';
import Cocina from '../../components/Cocina';
import getOrder from '../../controller/orders/getOrder'
import { fireEvent, cleanup, act, waitForElement } from '@testing-library/react';
import { renderWithRouter, history } from '../utils'
jest.mock('../../controller/orders/getOrder')


it.skip('cocina test', () => {
  const { getByTestId } = renderWithRouter(<OrderCard
    // order={{
    //   client: 'Susan',
    //   products: [
    //     {
    //       _id: '12',
    //       qty: '2',
    //       product: {
    //         productId: 'xAb',
    //         name: 'Café'
    //       }
    //     },
    //     {
    //       _id: '15',
    //       qty: '1',
    //       product: {
    //         productId: 'xxb',
    //         name: 'Café con leche'
    //       }
    //     }
    //   ]
    // }} 
    />);

  expect(getByTestId('12').value).toBe('on')

  fireEvent.change(getByTestId('12'), { target: { value: 'off' } })
  expect(getByTestId('client-name').textContent).toBe('Cliente: Susan')
  expect(getByTestId('12').value).toBe('off')
});

it('testing cocina comp', async()=> {
  const { getByTestId } = renderWithRouter(<Cocina/>);
  expect(getByTestId('orders').textContent).toBe('')

  const list = await waitForElement(() => getByTestId('card'))

  expect(list.textContent).toBe('Cliente: Susan')
  // fireEvent.change(getByTestId('5d4217946e893a00121fdda7'), { target: { value: 'off' } })
  // expect(getByTestId('5d4217946e893a00121fdda7').value).toBe('off')
})