import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import { fireEvent} from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import  {renderWithRouter}  from '../utils';


it.skip('renders without crashing', async() => {
    const { container, getByText } = renderWithRouter(<App />)
    // normally I'd use a data-testid, but just wanted to show this is also possible
    expect(container.innerHTML).toMatch('You are home')
    const leftClick = { button: 0 }
    fireEvent.click(getByText(/about/i), leftClick)
    // normally I'd use a data-testid, but just wanted to show this is also possible
    expect(container.innerHTML).toMatch('You are on the about page')
  });
