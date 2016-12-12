import React from 'react';
import { Route } from 'react-router';
import Login from './components/Login';
import Category from './components/category';
import Landing from './components/Landing';
import Main from './components/Main'; 

export default (
    <Route path="/" component={Main}>
        <Route path="login" component={Login} />
        <Route path="landing" component={Landing} />
        <Route path="category" component={Category} />
    </Route>
)