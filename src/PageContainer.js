import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicRoutes from './pages/public/PublicPagesContainer';
import ProtectedRoutes from './pages/protected/ProtectedPagesContainer';
import Loading from './components/notifications/Loading';

class PageContainer extends Component {
    render() {
        return (
            <>
                <PublicRoutes />
                <ProtectedRoutes />
                {this.props.loader > 0 ?
                    <Loading />
                    :
                    <></>
                }                
            </>
        );
    }
} 

function mapStateToProps(state) {
    return {
        loader: state.loader
    }
}

export default connect(
    mapStateToProps
)(PageContainer);
