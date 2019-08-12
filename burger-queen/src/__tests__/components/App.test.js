import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import { renderWithRouter } from '../utils';
it('renders without crashing', ()=>{
    const div=document.createElement('div');
    // const { getAllByPlaceholderText } = renderWithRouter(<App />);
    // expect(getAllByPlaceholderText('email').value).toBe('')
    ReactDOM.renderWithRouter(<App />, div);
    ReactDOM.unmountComponentAtNode(div)
})
