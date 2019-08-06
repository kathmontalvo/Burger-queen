import React from 'react';
import ReactDOM from 'react-dom';
import OrderCard from '../../components/Cocina/order-card';
import { fireEvent, cleanup, act, waitForElement } from '@testing-library/react';
import { renderWithRouter, history } from '../utils'


it('cocina test', () => {
  const { getByTestId } = renderWithRouter(<OrderCard 
    order={{
    client: 'Susan',
    products: [
      {
        _id: '12',
        qty: '2',
        product:{
          productId:'xAb',
          name:'Café'
        }
      },
      {
        _id: '15',
        qty: '1',
        product:{
          productId:'xxb',
          name:'Café con leche'
        }
      }
    ]
  }} />);

  expect(getByTestId('client-name').textContent).toBe('Cliente: Susan')
});