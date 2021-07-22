import { Provider } from 'react-redux';

import Auth from './components/Auth';
import store from './store';
import Routes from './routes';
import './mock';

function App() {
  return (
    <Provider store={store}>
        <Auth>
            <Routes />
        </Auth>
    </Provider>
  );
}

export default App;