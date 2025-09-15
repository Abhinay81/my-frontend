
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { API_BASE } from './config';

console.log("Backend API:", API_BASE);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
      