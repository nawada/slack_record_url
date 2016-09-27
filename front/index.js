import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Index from './components/Index';
import configureStore from './store/configureStore';

const store = configureStore({});
render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById('app')
);
