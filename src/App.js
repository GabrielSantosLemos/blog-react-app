import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Auth from './components/Auth';
import store from './store';
import GuestRoute from './routes/GuestRoute';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NewPost from './pages/Post';

import './mock';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <GuestRoute path="/sign-in" element={<SignIn />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/post/new" element={<NewPost />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </Provider>
  );
}

export default App;