import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from "redux-react-hook";
import { store } from "./store";
import './index.css';
import App from "./App";

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App/>
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
