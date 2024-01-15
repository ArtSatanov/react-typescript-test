import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCounter } from '../../services/redux/selectors/selectors';
import { AppDispatch } from '../../services/redux/store';
import { countDown } from '../../services/redux/notFoundSlice/notFoundSlice';
import { Navigate } from 'react-router-dom';

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
    <div>
      {counter === 0 && <Navigate to={'/'} />}
      The page you're trying to reach out hasn't been found. {counter}
    </div>
  );
};

export default NotFound;
