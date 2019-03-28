import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Account from './Account';
import Kyc from './Kyc';
import Songs from './Songs';
import SongForm from './SongForm';

class ProtectedPagesContainer extends Component {

    render() {
        const ProtectedRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={(props) => (
                    localStorage.getItem('login') ?
                        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )}
            />
        );

        return (
            <Switch>
                <ProtectedRoute
                    exact
                    path="/"
                    component={Songs}
                />
                <ProtectedRoute
                    exact
                    path="/add-song"
                    component={(props) => <SongForm {...props}
                        progressStatusIndex="first"
                        pageTitleText="Song Title" />}
                />
                <ProtectedRoute
                    exact
                    path="/edit-song"
                    component={(props) => <SongForm {...props}
                        progressStatusIndex="first"
                        pageTitleText="Song Title" />}
                />
                <ProtectedRoute exact path="/account" component={Account} />
                <ProtectedRoute exact path="/kyc" component={() => <Kyc />} />
            </Switch>
        );
    }
}

export default ProtectedPagesContainer;
