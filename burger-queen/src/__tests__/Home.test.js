import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home/Index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from '@testing-library/react';


it.skip('renders without crashing', () => {


  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});