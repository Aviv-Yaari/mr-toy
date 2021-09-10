import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/helpers.css';
import { RootCmp } from './root-cmp';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <RootCmp />
  </Provider>,
  document.getElementById('root')
);
