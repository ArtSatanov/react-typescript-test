import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from '../../services/redux/selectors/selectors';
import { LogOut } from '../LogOut/LogOut';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationSearchingSharpIcon from '@mui/icons-material/LocationSearchingSharp';

const StyledTB = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  gap: '2%',
  backgroundColor: 'white',
  padding: '0 10px',
  // borderRadius: theme.shape.borderRadius,
  width: '40%',
  borderRadius: '10%',
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.between('mobile', 'tablet')]: {
    display: 'none',
  },
}));

// const 1= styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '10px',
//   [theme.breakpoints.between('mobile', 'tablet')]: {
//     display: 'none',
//   },
// }));

export const Layout = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        // sx={{
        //   ':hover': {
        //     backgroundColor: theme.palette.primary.dark,
        //   },
        // }}
      >
        <StyledTB>
          <Typography
            variant="h4"
            component="h2"
            sx={{ display: { mobile: 'none', tablet: 'block' } }}
          >
            ReactTest
          </Typography>

          <Search>
            <LocationSearchingSharpIcon />
            <InputBase placeholder="search..." />
          </Search>

          <Navigation />
          {isLoggedIn && (
            <div>
              <p>Hi, {user.name}</p>
              <LogOut />
            </div>
          )}
        </StyledTB>
      </AppBar>
      <main>
        <Suspense fallback={<p>LOADING ... </p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
