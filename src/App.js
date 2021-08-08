import { ThemeProvider } from '@material-ui/core/styles';
import Auth from './components/Auth';
import Routes from './routes';
import './mock';

import createTheme from './theme/index';
import { useSettings } from './SettingsContext';
// remove alerta de erro Warning: findDOMNode is deprecated in StrictMode
//import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
//const theme = unstable_createMuiStrictModeTheme();

function App() {
  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <Auth>
        <Routes />
      </Auth>
    </ThemeProvider>
  );
}

export default App;