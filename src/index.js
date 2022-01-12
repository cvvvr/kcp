import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from "redux-react-hook";
import { store } from "./store";
import './index.css';
import Router from './router/Router';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router/>
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
