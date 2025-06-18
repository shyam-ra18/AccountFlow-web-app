import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import UserDetails from './pages/UserDetails';

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user-detail" element={<UserDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
