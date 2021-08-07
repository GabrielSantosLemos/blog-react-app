import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import PrivateRoute from '../routes/PrivateRoute';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import New from '../pages/Post/New';
import Feed from '../pages/Feed';
import Post from '../pages/Post';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <PrivateRoute path="/sign-in" element={<SignIn />} />
            <Route path="/feed" exact={true} element={<Feed/>} />
            <Route path="/post/new" element={<New />} />
            <Route path="/post/:slug" element={<Post />} /> 
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes