import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ComposePage from './pages/ComposePage';
import SentPage from './pages/SentPage';
import MessagesPage from './pages/MessagesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/compose" element={<ComposePage />} />
          <Route path="/sent" element={<SentPage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
