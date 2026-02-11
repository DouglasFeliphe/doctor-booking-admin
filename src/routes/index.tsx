import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../features/Dashboard';
import { LoginForm } from '../features/SignIn/admin-login-form';
import DashboardLayout from '../layout/DashboardLayout';
import { Patients } from '../features/Patients';

export const AppRoutes = () => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <>
      <BrowserRouter>
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" index element={<LoginForm />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route path="/dashboard" index element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="*" index element={<h1>Page Not Found</h1>} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};
