import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes'


import Auth from './components/Auth';
import store from './store';
import PrivateRoutes from './routes/PrivateRoutes';

// remove alerta de erro Warning: findDOMNode is deprecated in StrictMode
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

const theme = unstable_createMuiStrictModeTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
      <BrowserRouter>
        <Auth>
          <Routes />
        </Auth>
      </BrowserRouter>
    </Provider>
      
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);