import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../../components/header/AppHeader';
import { getKycStatus } from '../../redux/actions/kycActions';

class Account extends Component {

	componentWillMount = () => {
		this.props.getKycStatus();
	}

	render() {
		return (
			<section>
				<AppHeader
					pageTitle={`Hi, ${this.props.kycStatus.name}`}
				/>
				<div className="mw8 ph5 pt5">
					{!this.props.kycStatus.status ? 
						<span className="f3 b lh-title dib mw7">Your identity verification is pending. We’ll let you know when you’re approved.</span>
						:
						<span className="f3 b lh-title dib mw7">Your identity verification is approved.</span>
					}					
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
    return {
        kycStatus: state.kycStatus 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getKycStatus: () => dispatch(getKycStatus()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Account);
