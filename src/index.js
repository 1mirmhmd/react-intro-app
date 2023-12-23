import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Component default keyword'u olmadan yazıldığında import edilen dosyada süslü parantez içerisinde yazılır. default keyword'u dosyanın dışarıya açtığı varsayılan modülü belirtir. Sadece bir alan default olarak export edilebilir
import App, { var1 } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

