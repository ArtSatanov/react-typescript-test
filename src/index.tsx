import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './services/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { inputGlobalStyles } from 'components/MainStyles/MainStyle';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'components/MainStyles/theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            {/* <BrowserRouter basename="/react-typescript-test/"> */}
            <App />
            {/* <MainStyles /> */}
            {inputGlobalStyles}
            <CssBaseline />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
