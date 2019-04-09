import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../../components/header/AppHeader';
import { getKycStatus } from '../../redux/actions/kycActions';

class Account extends Component {

	componentWillMount = () => {
		this.props.getKycStatus();
	}

	render() {
		console.log(this.props.kycStatus)
		return (
			<section>
				<AppHeader
					pageTitle={this.props.kycStatus.first_name ? `Hi, ${this.props.kycStatus.first_name} ${this.props.kycStatus.last_name}` : `Hi,`}
				/>
				<div className="mw8 ph5 pt5">
					{this.props.kycStatus.state === 'SUBMITED' ? 
						<span className="f3 b lh-title dib mw7">Your identity verification is pending. We’ll let you know when you’re approved.</span>
						:
						<></>
					}
					{this.props.kycStatus.state === 'APPROVED' ? 
						<span className="f3 b lh-title dib mw7">Your identity verification is approved.</span>
						:
						<></>
					}	
					{this.props.kycStatus.state === 'REJECTED' ? 
						<span className="f3 b lh-title dib mw7">Your identity verification is rejected.</span>
						:
						<></>
					}
					{this.props.kycStatus.state === 'NOT_SUBMITED' ? 
						<span className="f3 b lh-title dib mw7">Your identity verification is not yet submited.</span>
						:
						<></>
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
