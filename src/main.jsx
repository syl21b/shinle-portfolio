import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ESSENTIAL for routing
import App from './App';
// import './index.css'; // Uncomment if you have a global CSS file

const root = ReactDOM.createRoot(document.getElementById('root')); // MUST be 'root' to match index.html
root.render(
  <React.StrictMode>
    {/* BrowserRouter with basename is ABSOLUTELY ESSENTIAL for GitHub Pages subpath */}
    <BrowserRouter basename="/shinle-portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);