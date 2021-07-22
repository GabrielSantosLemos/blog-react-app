import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import Auth from './components/Auth';
import store from './store';
import Routes from './routes';

// remove alerta de erro Warning: findDOMNode is deprecated in StrictMode
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

const theme = unstable_createMuiStrictModeTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Auth>
          <Routes />
        </Auth>
     </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);