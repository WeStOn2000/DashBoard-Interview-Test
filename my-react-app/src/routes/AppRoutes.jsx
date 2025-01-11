import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import DashboardPage from '../Pages/DashboardPage';

/**
 * Main routing configuration for the app.
 * Defines two routes:
 *  - '/' (LoginPage)
 *  - '/dashboard' (DashboardPage)
 */
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page at the root path */}
        <Route path="/" element={<LoginPage />} />
        {/* Dashboard page (requires user to be logged in, handled in the component) */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
