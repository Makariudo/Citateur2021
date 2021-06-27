import React from 'react';
import ReactDOM from 'react-dom';
import {CitationsProvider} from "store/citations";
import {AuthProvider} from "store/auth"
import {UIProvider} from 'store/ui'
import { SnackProvider } from 'store/snack';


import 'style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CitationsProvider>
        <SnackProvider>
          <UIProvider>
            <App /> 
          </UIProvider>
        </SnackProvider>
      </CitationsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
