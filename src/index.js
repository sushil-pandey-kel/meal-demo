// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './Router';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter><App/></BrowserRouter>
  </React.StrictMode>
);
