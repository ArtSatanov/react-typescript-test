import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { AppBar, Typography } from '@mui/material';
import { StyledTB } from './Layout.styled';

import { Loader } from 'components/Loader/Loader';
import { FilterBar } from 'components/FilterBar/FilterBar';

export const Layout = () => {
  return (
    <>
      <AppBar position="sticky">
        <StyledTB>
          <Typography
            sx={{
              display: {
                mobile: 'none',
                tablet: 'block',
                fontSize: '20px',
                fontWeight: 600,
                color: 'text.primary',
              },
            }}
          >
            <span style={{ color: '#038532' }}>React</span>Test
          </Typography>
          <FilterBar />
          <Navigation />
        </StyledTB>
      </AppBar>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
