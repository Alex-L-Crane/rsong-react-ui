import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import FacebookEmail from './FacebookEmail';

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
                    path="/login/email" 
                    render={(props) => (
                        localStorage.getItem('login') ? 
                           <Redirect to={{ pathname: '/' }} />  : <FacebookEmail {...props} />  
                    )}
                />
            </Switch>
        );
    }
} 

export default PublicPagesContainer;
