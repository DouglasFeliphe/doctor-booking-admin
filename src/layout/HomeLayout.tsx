import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/SideBar';

interface HomeLayoutProps {}

const HomeLayout = ({}: HomeLayoutProps) => {
  return (
    <>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
