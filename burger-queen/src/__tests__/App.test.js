import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import {renderIntoDocument} from 'react-dom/test-utils';


it.skip('renders without crashing', () => {
renderIntoDocument(<App />)
});
