import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from '../../services/redux/selectors/selectors';
import { LogOut } from '../LogOut/LogOut';

export const Layout = () => {
  const { isLoggedIn, user } = useAuth();
  
 

  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn && (
          <div>
            <p>Hi, {user.name}</p>
            <LogOut />
          </div>
        )}
      </header>
      <main>
        <Suspense fallback={<p>LOADING ... </p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
