import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/main.scss';
import Songs from './pages/Songs';
import Account from './pages/Account';
import Login from './pages/Login';
import Email from './pages/FacebookEmail';
import Kyc from './pages/Kyc';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div className="min-1440">
      <Switch>
        <Route exact path="/"
               render={(props) => <Songs {...props}
               pageTitleText="Add or edit songs"/>} />
       <Route exact path="/first"
              render={(props) => <Songs {...props}
              progressStatusIndex="first"
              pageTitleText="New Song"/>} />
        <Route exact path="/second"
              render={(props) => <Songs {...props}
              progressStatusIndex="second"
              pageTitleText="Song Title"/>} />
        <Route exact path="/third"
               render={(props) => <Songs {...props}
               progressStatusIndex="third"
               pageTitleText="Song Title" />} />
        <Route exact path="/fourth"
              render={(props) => <Songs {...props}
              progressStatusIndex="fourth"
              pageTitleText="Song Title" />} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/kyc" component={Kyc} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
