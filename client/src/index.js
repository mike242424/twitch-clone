import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import DashboardPage from './DashboardPage/DashboardPage';
import './index.css';
import LoginPage from './Auth/LoginPage/LoginPage';
import RegisterPage from './Auth/RegisterPage/RegisterPage';
import NotFound from './components/NotFound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  </BrowserRouter>,
);
