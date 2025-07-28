import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { logPerformanceMetrics } from './reportWebVitals';

// Site uses dark mode only - no light mode option available
document.documentElement.classList.add('dark');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Monitor performance metrics in development
if (process.env.NODE_ENV === 'development') {
  logPerformanceMetrics();
}