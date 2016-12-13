import React from 'react';
import { Route } from 'react-router';
import Login from './components/Login';
import Landing from './components/Landing';
import Register from './components/Register';
import Items from './components/Items';
import Item from './components/Item';
import Categories from './components/Categories';
import Main from './components/Main';

export default (
    <Route path="/" component={Main}>
        <Route path="login" component={Login} />
        <Route path="landing" component={Landing} />
        <Route path="register" component={Register} />
        <Route path="categories" component={Categories} />
        <Route path="items" component={Items} />
        {/* TODO Remove this after finishing US#5 */}
        <Route path="item" component={Item} />
    </Route>
);