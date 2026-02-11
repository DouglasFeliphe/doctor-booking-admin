import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../features/Dashboard';
import { LoginForm } from '../features/SignIn/admin-login-form';
import HomeLayout from '../layout/HomeLayout';

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
            <Route path="/" element={<HomeLayout />}>
              <Route path="/dashboard" index element={<Dashboard />} />
              <Route path="*" index element={<h1>Page Not Found</h1>} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};
