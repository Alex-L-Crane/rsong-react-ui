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

const steps = ['requireEmail', 'requireEmailVerification', 'requirePhone', 'requirePhoneVerification', 'requireKyc'];

class ProtectedPagesContainer extends Component {

    checkStep = (login, currentStep) => {
        let valid = true;
        for (const [index, step] of steps.entries()) {
            if (step !== currentStep) {
                if (login.verification[steps[index]] === true) {
                    valid = false;
                    break;
                }
            } else {
                break;
            }
        }
        return valid;
    }

    checkRoute = (login, currentStep) => {
        if (login.verification && login.verification[currentStep] === true && this.checkStep(login, currentStep)) {
            return true;
        } else {
            return false;
        }        
    }

    redirectToStep = (login) => {
        
    }

    checkProtectedRoute = (login) => {
        for (const [index, step] of steps.entries()) {
            if (step !== 'reqireKyc') {
               if (login.verification[steps[index]] === true) {
//redirect na tu stranu
               }
            }            
        } 
    }

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
                        this.checkRoute(JSON.parse(localStorage.getItem('login')), 'requireKyc') ? 
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
                        this.checkRoute(JSON.parse(localStorage.getItem('login')), 'requireEmail') ?
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
                        this.checkRoute(JSON.parse(localStorage.getItem('login')), 'requireEmailVerification') ?
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
                        this.checkRoute(JSON.parse(localStorage.getItem('login')), 'requireMobile') ?
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
                        this.checkRoute(JSON.parse(localStorage.getItem('login')), 'requireMobileVerification') ?
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
