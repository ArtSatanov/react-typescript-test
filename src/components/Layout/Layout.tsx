import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from '../../services/redux/selectors/selectors';
import { LogOut } from '../LogOut/LogOut';
import { InputBase, Typography } from '@mui/material';
import { StyledTB, Search, AppBarStyled } from './Layout.styled';

import LocationSearchingSharpIcon from '@mui/icons-material/LocationSearchingSharp';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <AppBarStyled position="sticky">
        <StyledTB>
          <Typography
            sx={{
              display: {
                mobile: 'none',
                tablet: 'block',
                fontSize: '20px',
                fontWeight: 600,
              },
            }}
          >
            <span style={{ color: '#9BB537' }}>React</span>Test
          </Typography>

          <Search>
            <LocationSearchingSharpIcon sx={{ color: 'black' }} />
            <InputBase
              placeholder="search..."
              sx={{ color: '#1E1E1E', width: '100%' }}
            />
          </Search>
          <Navigation />
          {isLoggedIn && (
            <div>
              <p>Hi, {user.name}</p>
              <LogOut />
            </div>
          )}
        </StyledTB>
      </AppBarStyled>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
