import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {Provider} from 'react-redux'
import './index.css';
import store from './redux/Store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
)
