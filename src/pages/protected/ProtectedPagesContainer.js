import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Account from './Account';
import Kyc from './Kyc';
import Songs from './Songs';

class ProtectedPagesContainer extends Component {

    render() {
        const ProtectedRoute = ({ component: Component, ...rest }) => {
            console.log(rest);return (
            <Route 
                {...rest} 
                render={(props) => {console.log(props); return(
                    localStorage.getItem('login') ? 
                        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />   
                )}}
            />
         )};

        return (
            <Switch>     
                <ProtectedRoute
                    exact
                    path="/"
                    component={(props) => <Songs {...props}
                        pageTitleText="Add or edit songs" />}  
                />
                <ProtectedRoute
                    exact 
                    path="/first"
                    component={(props) => <Songs {...props}
                        progressStatusIndex="first"
                        pageTitleText="Song Title" />}
                />
                <ProtectedRoute 
                    exact 
                    path="/second"
                    component={(props) => <Songs {...props}
                        progressStatusIndex="second"
                        pageTitleText="Song Title" />}
                />
                <ProtectedRoute 
                    exact 
                    path="/third"
                    component={(props) => <Songs {...props}
                        progressStatusIndex="third"
                        pageTitleText="Song Title" />}
                />
                <ProtectedRoute 
                    exact 
                    path="/fourth"
                    component={(props) => <Songs {...props}
                        progressStatusIndex="fourth"
                        pageTitleText="Song Title" />}
                />
                <ProtectedRoute exact path="/account" component={Account} />
                <ProtectedRoute exact path="/kyc" component={Kyc} />
            </Switch>
        );
    }
} 

export default ProtectedPagesContainer;
