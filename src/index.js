import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Force dark mode by default without option to switch
document.documentElement.classList.add('dark');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);