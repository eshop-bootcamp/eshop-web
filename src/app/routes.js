import React from 'react';
import { Route } from 'react-router';
import Login from './components/Login';
import Landing from './components/Landing';
import Register from './components/Register';
import Categories from './components/Categories';
import LandingPageBuyer from './components/LandingPageBuyer';
import Main from './components/Main'; 


export default (
    <Route path="/" component={Main}>
        <Route path="login" component={Login} />
        <Route path="landing" component={Landing} />
        <Route path="register" component={Register} />
        <Route path="landingpagebuyer" component={LandingPageBuyer} />
    </Route>
)