import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/SideBar';

const DashboardLayout = () => {
  return (
    <div data-slot="dashboard-root" className="flex min-h-screen bg-muted/20">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main data-slot="main-content" className="flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
