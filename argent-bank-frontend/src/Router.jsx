import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={HomePage} />
        <Route path="/login" element={LoginPage} />
        <Route path="/profile" element={ProfilePage} />
        <Route element={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;