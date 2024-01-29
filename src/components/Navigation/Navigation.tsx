import { useState } from 'react';
import { routes } from '../../const/routes';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, useAuth } from 'services/redux/selectors/selectors';
import { Link, Switch } from '@mui/material';
import { AppDispatch } from 'services/redux/store';
import styled from '@emotion/styled';
import { ModeNight } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import { toggleTheme } from 'services/redux/themeSlice/themeSlice';
import { logOutUser } from 'services/redux/operations/operations';
import { logOut } from 'services/redux/authSlice/authSlice';
import LoginIcon from '@mui/icons-material/Login';

export const SwitcherBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const darkMode = useSelector(selectTheme);
  const { isLoggedIn, user, isAdmin } = useAuth();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlerLogout = () => {
    dispatch(logOutUser());
    dispatch(logOut());
    handleClose();
  };

  return (
    <>
      <nav>
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Link
            component={NavLink}
            to={routes.HOME}
            sx={{
              textDecoration: 'none',
              fontWeight: 400,
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <Typography
              sx={{ minWidth: 100, fontSize: '20px', fontWeight: 600 }}
            >
              Home
            </Typography>
          </Link>
          <Tooltip title="Menu">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  color: '#9BB537',
                  bgcolor: 'primary.main',
                }}
              >
                {!isLoggedIn ? 'M' : user.name.split('')[0].toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {isLoggedIn && isAdmin && (
            <Box key={Math.random() * 100}>
              <MenuItem onClick={handleClose} key={Math.random() * 100}>
                <Avatar />
                <Link
                  component={NavLink}
                  to={routes.ADMIN}
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 400,
                    color: 'text.primary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                  }}
                >
                  My account
                </Link>
              </MenuItem>
            </Box>
          )}

          {isLoggedIn && !isAdmin && (
            <Box key={Math.random() * 100}>
              <MenuItem onClick={handleClose}>
                <Link
                  component={NavLink}
                  to={'/user'}
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 400,
                    color: 'text.primary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                  }}
                >
                  <Avatar /> My account
                </Link>
              </MenuItem>
            </Box>
          )}
          <Divider />

          {!isLoggedIn ? (
            <Box key={Math.random() * 100}>
              <MenuItem onClick={handleClose}>
                <Link
                  component={NavLink}
                  to={routes.SIGNUP}
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 400,
                    color: 'text.primary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                  }}
                >
                  <ListItemIcon>
                    <PersonAdd
                      fontSize="small"
                      sx={{ color: 'text.primary' }}
                    />
                  </ListItemIcon>
                  Sign up
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose} key={Math.random() * 100}>
                <Link
                  component={NavLink}
                  to={routes.LOGIN}
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 400,
                    color: 'text.primary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                  }}
                >
                  <ListItemIcon>
                    <LoginIcon
                      fontSize="small"
                      sx={{ color: 'text.primary' }}
                    />
                  </ListItemIcon>
                  Sign in
                </Link>
              </MenuItem>
            </Box>
          ) : (
            <Box key={Math.random() * 100}>
              <MenuItem onClick={handlerLogout} key={Math.random() * 100}>
                <ListItemIcon>
                  <Logout fontSize="small" sx={{ color: 'text.primary' }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Box>
          )}
          <Box key={Math.random() * 100}>
            <MenuItem key={Math.random() * 100}>
              <SwitcherBox>
                {darkMode ? (
                  <LightModeIcon
                    sx={{ color: 'text.primary', width: 24, height: 24 }}
                  />
                ) : (
                  <ModeNight
                    sx={{ color: 'text.primary', width: 24, height: 24 }}
                  />
                )}

                <Switch
                  onChange={() => dispatch(toggleTheme())}
                  sx={{ color: '#94b340' }}
                />
              </SwitcherBox>
            </MenuItem>
          </Box>
        </Menu>
      </nav>
    </>
  );
};
