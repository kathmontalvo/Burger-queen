import React from 'react';
import Form from '../../components/Login/Form';
import { fireEvent, cleanup, act, waitForElement } from '@testing-library/react';
import submit from '../../controller/login';
import { renderWithRouter, history } from '../utils'

afterEach(cleanup);

jest.mock('../../controller/login')

it("router validation", async () => {

  const { getByPlaceholderText, getByText } = renderWithRouter(<Form onSubmit={submit} />);

  expect(getByPlaceholderText('Email').value).toBe('')
  expect(getByPlaceholderText('Password').value).toBe('');
  act(() => {
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'emily@gmail.com' } })
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: '1234AbcffffffffffD' } })
  })

  expect(getByPlaceholderText('Email').value).toBe('emily@gmail.com')
  expect(getByPlaceholderText('Password').value).toBe('1234AbcffffffffffD');
  const submitBtn = getByText('Ingresar');
  expect(history.location.pathname).toBe("/");
  act(() => {
    fireEvent.submit(submitBtn)
  })

  expect(submit.mock.calls).toHaveLength(1)
  expect(submit.mock.calls[0][0]).toBe('emily@gmail.com')
  expect(submit.mock.calls[0][1]).toBe('1234AbcffffffffffD')

});

it("router validation", async () => {
  const { getByText, getByTestId } = renderWithRouter(<Form onSubmit={submit} />);
  const submitBtn = getByText('Ingresar');
  try {
    getByTestId('errMsg')
  } catch (e) {
    expect(e.message.startsWith('Unable to find an element by: [data-testid=\"errMsg\"]')).toBe(true)
  }

  act(() => {
    fireEvent.submit(submitBtn)
  })
  const errMsg = await waitForElement(() => getByTestId('errMsg'))
  expect(errMsg.textContent).toBe('*Error desde mock')
});