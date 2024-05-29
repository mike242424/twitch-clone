import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AuthPage from './AuthPage/AuthPage';
import DashboardPage from './DashboardPage/DashboardPage';
import './index.css';

const routes = createBrowserRouter([
  { path: '/auth', element: <AuthPage /> },
  { path: '/dashboard', element: <DashboardPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={routes} />
    </App>
  </React.StrictMode>,
);
