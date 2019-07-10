import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import Form from '..src/components/Form'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});
