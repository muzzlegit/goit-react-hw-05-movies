import { Outlet } from 'react-router-dom';
//COMPONENTS
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
