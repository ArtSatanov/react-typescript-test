import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCounter } from '../../services/redux/selectors/selectors';
import { AppDispatch } from '../../services/redux/store';
import { countDown } from '../../services/redux/notFoundSlice/notFoundSlice';
import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

const NotFound = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let isCancelled = false;
    counter > 0 &&
      setTimeout(() => !isCancelled && dispatch(countDown()), 1000);

    return () => {
      isCancelled = true;
    };
  }, [counter, dispatch]);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
        fontSize: '20px',
        fontWeight: '600',
      }}
    >
      {counter === 0 && <Navigate to={'/'} />}
      <p>The page you're trying to reach out hasn't been found. {counter}</p>
    </Box>
  );
};

export default NotFound;
