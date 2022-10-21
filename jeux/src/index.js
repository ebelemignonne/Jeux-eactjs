import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Jeux from './Jeux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Jeux />
  </React.StrictMode>
);

// If you want to start measuring performance in your Jeux, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
