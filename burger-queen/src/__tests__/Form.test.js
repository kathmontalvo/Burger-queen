import React from 'react';
import Form from '../components/Form';
import { render, fireEvent } from '@testing-library/react';

it('submit event ', () => {
  const onSubmit = jest.fn()
  const { getByTestId } = render(<Form onSubmit={onSubmit}/>);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
})

// it('inputs have changed', () => {

// })
