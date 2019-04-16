import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import FacebookEmail from './FacebookEmail';

import AccountEmail from './createaccount/AccountEmail'

class PublicPagesContainer extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/login"
                    render={(props) => (
                        localStorage.getItem('login') ?
                           <Redirect to={{ pathname: '/' }} />  : <Login {...props} />
                    )}
                />
                <Route
                    exact
                    path="/login/signup-email"
                    render={(props) => (
                        localStorage.getItem('login') ?
                           <Redirect to={{ pathname: '/' }} />  : <AccountEmail {...props} />
                    )}
                />
                <Route
                    exact
                    path="/login/email"
                    render={(props) => (
                        localStorage.getItem('login') ?
                           <Redirect to={{ pathname: '/' }} />  : <FacebookEmail {...props} />
                    )}
                />
                <Route
                    path="/*"
                    render={(props) => (
                        !localStorage.getItem('login') ?
                            <Redirect to={{ pathname: '/', state: { from: props.location } }} /> : <></>
                    )}
                />
            </Switch>
        );
    }
}

export default PublicPagesContainer;
