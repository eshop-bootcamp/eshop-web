import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './components/Login';
import Landing from './components/Landing';
import Register from './components/Register';
import Items from './components/Items';
import Item from './components/Item';
import Categories from './components/Categories';
import LandingPageBuyer from './components/LandingPageBuyer';
import Main from './components/Main'; 
import Auth from './Auth';

function requireAuth(nextState, replace) {
  if (!Auth.isAuthenticated()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={Login} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="landing" component={Landing} onEnter={requireAuth} />
        <Route path="landingpagebuyer" component={LandingPageBuyer} onEnter={requireAuth} />
        <Route path="categories" component={Categories} onEnter={requireAuth} />
        <Route path="items/:categoryId" component={Items} onEnter={requireAuth}/>
    </Route>
);