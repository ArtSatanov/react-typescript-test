import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<p>LOADING ... </p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
