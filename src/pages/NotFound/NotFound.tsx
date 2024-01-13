import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { redirect } from 'react-router-dom';
import { selectCounter } from '../../services/redux/selectors/selectors';
import { AppDispatch } from '../../services/redux/store';
import { countDown } from '../../services/redux/notFoundSlice/notFoundSlice';

const NotFound = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch<AppDispatch>();

  // const onDone = () => console.log('Timer counted down');

  useEffect(() => {
    setTimeout(() => dispatch(countDown()), 1000);
  }, [dispatch]);
  return (
    <div>The page you're trying to reach out hasn't been found. {counter}</div>
  );
};

export default NotFound;
