import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authReducer } from './authSlice/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { itemsReducer } from './itemsSlice/itemsSilce';
import { notFoundReducer } from './notFoundSlice/notFoundSlice';
import { themeReducer } from './themeSlice/themeSlice';

const authPersistCfg = {
  key: 'auth',
  storage,
  whitelist: ['fakeToken'],
};
const themePersistCfg = {
  key: 'theme',
  storage,
  whitelist: ['darkMode'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer<any, any>(authPersistCfg, authReducer),
    items: itemsReducer,
    notFound: notFoundReducer,
    theme: persistReducer<any, any>(themePersistCfg, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState> | any;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
