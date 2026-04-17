import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Создаем корневой элемент
const rootElement = document.getElementById('root');

// Проверяем, что элемент существует
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Элемент с id="root" не найден!');
}
