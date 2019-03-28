import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';

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
            </Switch>
        );
    }
} 

export default PublicPagesContainer;
