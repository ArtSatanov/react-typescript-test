import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { AppBar, InputBase, Typography } from '@mui/material';
import { StyledTB, Search } from './Layout.styled';

import LocationSearchingSharpIcon from '@mui/icons-material/LocationSearchingSharp';
import { Loader } from 'components/Loader/Loader';

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

          <Search>
            <LocationSearchingSharpIcon sx={{ color: 'black' }} />
            <InputBase
              placeholder="search..."
              sx={{ color: '#1E1E1E', width: '100%' }}
            />
          </Search>
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
