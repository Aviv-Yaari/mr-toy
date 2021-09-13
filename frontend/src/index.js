import React from 'react';
import ReactDOM from 'react-dom';
import { RootCmp } from './root-cmp';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <RootCmp />
  </Provider>,
  document.getElementById('root')
);
