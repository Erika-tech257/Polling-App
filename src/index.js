import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bulma/css/bulma.min.css'


// index.js:1 Warning: Legacy context API has been detected within a strict-mode tree. Changed to React.Fragment to resolve error
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
