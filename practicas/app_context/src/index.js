import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ProvedorTema } from './contextos/contextoTema';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <ProvedorTema>
      <App />
    </ProvedorTema>
  </StrictMode>,
  document.getElementById('root')
);
