import React from 'react';
import { Route } from 'react-router';
import Login from './components/Login';
import Landing from './components/Landing';
import Register from './components/Register';
import Items from './components/Items';
import Item from './components/Item';
import Categories from './components/Categories';
import LandingPageBuyer from './components/LandingPageBuyer';
import Main from './components/Main'; 

export default (
    <Route path="/" component={Main}>
        <Route path="login" component={Login} />
        <Route path="landing" component={Landing} />
        <Route path="register" component={Register} />
        <Route path="landingpagebuyer" component={LandingPageBuyer} />
        <Route path="categories" component={Categories} />
        <Route path="items/{categoryName}" component={Items} />
    </Route>
);