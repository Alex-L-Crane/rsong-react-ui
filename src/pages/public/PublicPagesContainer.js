import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';

import AccountEmail from './createaccount/AccountEmail'
import AccountEmailVerify from './createaccount/AccountEmailVerify'
import AccountEmailPending from './createaccount/AccountEmailPending'

import AccountPhone from './createaccount/AccountPhone'
import AccountPhoneVerify from './createaccount/AccountPhoneVerify'

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
                    path="/login/signup-email-verify"
                    render={(props) => (
                        localStorage.getItem('login') ?
                           <Redirect to={{ pathname: '/' }} />  : <AccountEmailVerify {...props} />
                    )}
                />
                <Route
                    exact
                    path="/login/signup-email-pending"
                    render={(props) => (
                        localStorage.getItem('login') ?
                           <Redirect to={{ pathname: '/' }} />  : <AccountEmailPending {...props} />
                    )}
                />
                <Route
                    exact
                    path="/login/signup-phone"
                    render={(props) => (
                        localStorage.getItem('login') ?
                           <Redirect to={{ pathname: '/' }} />  : <AccountPhone {...props} />
                    )}
                />
                <Route
                    exact
                    path="/login/signup-phone-verify"
                    render={(props) => (
                        localStorage.getItem('login') ?
                           <Redirect to={{ pathname: '/' }} />  : <AccountPhoneVerify {...props} />
                    )}
                />
                <Route
                    exact
                    path="/login/signup-email-verify"
                    render={(props) => (
                        localStorage.getItem('login') ?
                           <Redirect to={{ pathname: '/' }} />  : <AccountEmail {...props} />
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
