import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <BrowserRouter>
    <Route  path="/" component={App}/>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
