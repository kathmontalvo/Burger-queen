// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../../components/App';
// import { fireEvent, cleanup, act, waitForDomChange, waitForElement, getByTestId } from '@testing-library/react';
// import { renderWithRouter, history } from '../utils';

// it('render home page', () => {
//     const {container} = renderWithRouter(<App />)
//     // normally I'd use a data-testid, but just wanted to show this is also possible
//     expect(container.innerHTML).toMatch(getByTestId('login'))
//   })
//   it('render about page on route navigation', () => {
//     const {container} = renderWithRouter(<App />, {
//       route: '/home',
//     })
  
//     // normally I'd use a data-testid, but just wanted to show this is also possible
//     expect(container.innerHTML).toMatch(getByTestId('burger'))
//   })


//   it('rendering a component that uses withRouter', () => {
//     const route = '/home'
//     const {getByTestId} = renderWithRouter(<App />, {route})
//     expect(getByTestId('burger').textContent).toBe(route)
//   })
