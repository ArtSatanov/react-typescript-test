import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectItems,
} from '../../services/redux/Selectors/selectors';
import { fetchProducts } from '../../services/redux/Operations/operations';
import { AppDispatch } from '../../services/redux/store';
import { Loader } from '../Loader/Loader';

export const ItemList = () => {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchProducts(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && !error && items.length !== 0 && ({items.map(item  => ())})}
    </div>
  );
};
