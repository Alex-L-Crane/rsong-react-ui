import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Account from './Account';
import Kyc from './Kyc';
import Songs from './Songs';
import SongForm from './SongForm';
import AccountEmail from './createAccount/AccountEmail';
import AccountEmailVerify from './createAccount/AccountEmailVerify';
import AccountPhone from './createAccount/AccountPhone';
import AccountPhoneVerify from './createAccount/AccountPhoneVerify';

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

        const ProtectedKycRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={(props) => (
                    localStorage.getItem('login') ?
                        JSON.parse(localStorage.getItem('login')).require_kyc === true ? 
                            <Component {...props} /> 
                            :
                            <Redirect to={{ pathname: '/', state: { from: props.location } }} />                        
                        : 
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )}
            />
        );

        const ProtectedEmailRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={(props) => (
                    localStorage.getItem('login') ?
                        JSON.parse(localStorage.getItem('login')).require_email === true ? 
                            <Component {...props} /> 
                            :
                            <Redirect to={{ pathname: '/', state: { from: props.location } }} />                        
                        : 
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )}
            />
        );

        const ProtectedEmailVerificationRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={(props) => (
                    localStorage.getItem('login') ?
                        JSON.parse(localStorage.getItem('login')).require_email_verification === true ? 
                            <Component {...props} /> 
                            :
                            <Redirect to={{ pathname: '/', state: { from: props.location } }} />                        
                        : 
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )}
            />
        );

        const ProtectedMobileRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={(props) => (
                    localStorage.getItem('login') ?
                        JSON.parse(localStorage.getItem('login')).require_mobile === true ? 
                            <Component {...props} /> 
                            :
                            <Redirect to={{ pathname: '/', state: { from: props.location } }} />                        
                        : 
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )}
            />
        );

        const ProtectedMobileVerificationRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={(props) => (
                    localStorage.getItem('login') ?
                        JSON.parse(localStorage.getItem('login')).require_mobile_verification === true ? 
                            <Component {...props} /> 
                            :
                            <Redirect to={{ pathname: '/', state: { from: props.location } }} />                        
                        : 
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )}
            />
        );

        return (
            <Switch>
                <ProtectedRoute exact path="/" component={Songs} />
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
                <ProtectedKycRoute exact path="/kyc" component={Kyc} />
                <ProtectedEmailRoute exact path="/login/signup-email" component={AccountEmail} />
                <ProtectedEmailVerificationRoute exact path="/login/signup-email-verify" component={AccountEmailVerify} />
                <ProtectedMobileRoute exact path="/login/signup-phone" component={AccountPhone} />
                <ProtectedMobileVerificationRoute exact path="/login/signup-phone-verify" component={AccountPhoneVerify} />
                {/* <ProtectedFacebookLoginRoute exact path="/login/email" component={FacebookEmail} /> */}
                <Route
                    path="/*"                
                    render={(props) => (
                        localStorage.getItem('login') ?       
                            <Redirect to={{ pathname: '/', state: { from: props.location } }} /> : <></>
                    )}
                />
            </Switch>    
        );
    }
}

function mapStateToProps(state) {
    return {
        errorModal: state.errorModal 
    }
}

export default connect(
    mapStateToProps,
)(ProtectedPagesContainer);
