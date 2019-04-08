import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Account from './Account';
import Kyc from './Kyc';
import Songs from './Songs';
import SongForm from './SongForm';
import ErrorModal from '../../components/notifications/ErrorModal';

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
                        JSON.parse(localStorage.getItem('login')).require_kyc === false ? 
                            <Component {...props} /> 
                            :
                            <Redirect to={{ pathname: '/', state: { from: props.location } }} />                        
                        : 
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )}
            />
        );

        return (
            <>
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
                    <Route
                        path="/*"                
                        render={(props) => (
                            localStorage.getItem('login') ?       
                                <Redirect to={{ pathname: '/', state: { from: props.location } }} /> : <></>
                        )}
                    />
                </Switch>
                {this.props.errorModal.open ? <ErrorModal /> : <></>}
            </>
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
