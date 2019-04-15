import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Kyc from '../protected/Kyc';

class PublicPagesContainer extends Component {
    render() {
        return (
            <Switch>
            <Route exact path="/kyc" component={Kyc} />
                <Route
                    exact
                    path="/login" 
                    render={(props) => (
                        localStorage.getItem('login') ? 
                           <Redirect to={{ pathname: '/' }} />  : <Login {...props} />  
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
