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
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';

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
          <Grid container spacing={2}>
            {items.map((item: IItem) => (
              <li key={item.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={item.avatar}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </li>
            ))}
          </Grid>
        </ul>
      )}
    </div>
  );
};
