import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginForm } from '@/features/SignIn/admin-login-form';
import DashboardLayout from '@/layout/DashboardLayout';
import { Patients } from '@/features/Patients';
import { Doctors } from '@/features/Doctors';
import { Appointments } from '@/features/Appointments';

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
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route
                path="*"
                index
                element={<h1 className="text-red">Página em construção</h1>}
              />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};
