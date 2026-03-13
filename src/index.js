import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Eğer index.css sildiysen bu satır hata verebilir, gerekirse sil.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);