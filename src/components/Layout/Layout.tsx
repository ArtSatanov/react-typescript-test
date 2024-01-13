import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectUser } from '../../services/redux/selectors/selectors';
import { LogOut } from '../LogOut/LogOut';

export const Layout = () => {
  const { name } = useSelector(selectUser);

  return (
    <>
      <header>
        <Navigation />
        <p>Hi, {name}</p>
        <LogOut />
      </header>
      <main>
        <Suspense fallback={<p>LOADING ... </p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
