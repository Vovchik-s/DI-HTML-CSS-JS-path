import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import {combineReducers} from 'redux';
import reportWebVitals from './reportWebVitals';

import {reducer_list,reducer_details} from './redux/reducer';
const store = combineReducers(reducer_list,reducer_details ); // combineReducers is a function that takes an object of reducers and returns a reducer that combines them.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducer_details)}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
