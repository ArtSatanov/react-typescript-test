import { configureStore } from '@reduxjs/toolkit';
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
import { itemsReducer } from './ItemsSlice/itemsSilce';

const authPersistCfg = {
  key: 'auth',
  storage,
  whitelist: ['fakeToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistCfg, authReducer),
    items: itemsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
