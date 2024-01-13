import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectItems,
} from '../../services/redux/selectors/selectors';
import { fetchProducts } from '../../services/redux/operations/operations';
import { AppDispatch } from '../../services/redux/store';
import { Loader } from '../Loader/Loader';
import { IItem } from '../../interfaces/interfaces';

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
      {!isLoading && error === 'canceled' && items.length !== 0 && (
        <ul>
          {items.map((item: IItem) => (
            <li key={item.id}>
              <img src={item.avatar} alt={item.name} />
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
