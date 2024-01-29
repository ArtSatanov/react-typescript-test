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
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          sx={{
            marginTop: 1,
          }}
        >
          {items.map((item: IItem) => (
            <Grid
              item
              mobile={12}
              tablet={4}
              sx={{ padding: '5px 2px' }}
              key={item.id}
            >
              <Card
                sx={{
                  maxWidth: 350,
                  margin: 'auto',
                  minHeight: '100%',
                  objectFit: 'cover',
                  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                  ':hover': {
                    transform: 'scale(1.03)',
                    cursor: 'zoom-in',
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.avatar}
                    alt={item.name}
                  />
                  <CardContent sx={{ minHeight: '40%' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
