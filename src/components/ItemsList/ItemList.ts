import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectItems,
} from '../../services/redux/Selectors/selectors';
import { fetchProducts } from '../../services/redux/Operations/operations';

export const ItemList = () => {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchProducts(controller.signal));
  }, []);
  return <div>ItemList</div>;
};
