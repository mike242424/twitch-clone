import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import DashboardPage from './DashboardPage/DashboardPage';
import './index.css';
import LoginPage from './Auth/LoginPage/LoginPage';
import RegisterPage from './Auth/RegisterPage/RegisterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path={'/'} element={<Navigate to="/dashboard" replace />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/dashboard'} element={<DashboardPage />} />
      </Routes>
    </App>
  </BrowserRouter>,
);
