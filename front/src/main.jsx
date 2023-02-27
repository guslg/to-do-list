import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import combineReducers from './reducers/index.js';
import thunk from "redux-thunk";

const store = createStore(combineReducers, applyMiddleware(thunk));
// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);