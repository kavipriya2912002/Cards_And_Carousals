import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import './index.css';  // Import your Tailwind CSS
import App from './App'; // Your main App component

const container = document.getElementById('root');
const root = createRoot(container); // Create root for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
