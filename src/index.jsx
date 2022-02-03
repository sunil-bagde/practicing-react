import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';

import App from "./App"

import "reset-css";

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
document.getElementById('root'),
); 
