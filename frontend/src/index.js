import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Assuming App component is already created
import { BrowserRouter as Router } from 'react-router-dom'; // Assuming you are using react-router for routing

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
