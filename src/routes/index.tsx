import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginForm } from '../features/SignIn/admin-login-form';
// import Dashboard from '../features/Dashboard';

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
