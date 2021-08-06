import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import PrivateRoute from '../routes/PrivateRoute';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import NewPost from '../pages/Post';
import Feed from '../pages/Feed';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/feed" exact={true} element={<Feed/>} />
            <PrivateRoute path="/sign-in" element={<SignIn />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/post/new" element={<NewPost />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes