// import React from 'react';
// import Lista from '../../components/Products/Lista';
// import { fireEvent, cleanup, act } from '@testing-library/react';
// import { renderWithRouter } from '../utils'

// afterEach(cleanup);
// it('lista de productos test', () => {
//   const { getByTestId } = renderWithRouter(<Lista
//     item={{
//       _id: '12',
//       qty: '1',
//       productId: 'xAb',
//       name: 'Café',
//       price: '5'
//     }} />)
//     const increase = getByTestId('addQty');
//   act(() => {
//     fireEvent.click(increase)
//   })
//   expect(getByTestId('Café').textContent).toBe('Café')
//   expect(getByTestId('qty').textContent).toBe('1')
// })