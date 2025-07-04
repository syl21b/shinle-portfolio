// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- Keep this import!
import App from './App';
// If you have a global CSS file for your entire app (like index.css), uncomment it:
// import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root')); // <-- Ensure this is 'root'

root.render(
  <React.StrictMode>
    {/* <-- BrowserRouter with basename is ESSENTIAL for subpath deployment --> */}
    <BrowserRouter basename="/shinle-portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);