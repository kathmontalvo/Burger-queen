import React from 'react';
import Form from '../components/Form';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

const renderWithRouter = (ui, {
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
} = {}) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

it('submit event ', () => {
  const onSubmit = jest.fn()
  const { getByTestId } = renderWithRouter(<Form onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
})
