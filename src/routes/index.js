import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Post from '../pages/Post'
import SignIn from '../pages/SignIn'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/sign-in" component={SignIn} />
    </BrowserRouter>
);

export default Routes