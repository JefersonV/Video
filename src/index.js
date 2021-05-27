import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore} from 'react-redux';

const app = document.getElementById('app')
ReactDOM.render(
  <Provider >
    <App />
  </Provider>, 
  app)