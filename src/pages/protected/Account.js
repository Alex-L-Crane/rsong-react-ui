import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
					pageTitle={this.props.kycStatus.full_name ? `Hi, ${this.props.kycStatus.full_name}` : `Hi,`}
				/>
				<div className="mw8 ph5 pt5">
						
					{this.props.kycStatus.kyc && this.props.kycStatus.kyc.state === 'SUBMITED' ? 
						<span className="f3 b lh-title dib mw7">Your KYC application is pending. You will receive an email when the process is complete.</span>
						:
						<></>
					}
					{this.props.kycStatus.kyc && this.props.kycStatus.kyc.state === 'APPROVED' ? 
						<span className="f3 b lh-title dib mw7">Congratulations! Your KYC application has been approved!</span>
						:
						<></>
					}	
					{this.props.kycStatus.kyc && this.props.kycStatus.kyc.state === 'REJECTED' ? 
						<span className="f3 b lh-title dib mw7">Unfortunately, your KYC application could not be approved at this time. Please contact the RSong administrator admin@rsong.io for more information.</span>
						:
						<></>
					}
					{this.props.kycStatus.kyc && this.props.kycStatus.kyc.state === 'NOT_SUBMITED' ? 
						<>
							<span className="f3 b lh-title dib mw7">Your KYC Application has not yet been submitted. Please submit so you can begin to receive royalties from RSong.</span>
							<br/><br/>
							<Link className="f4 lh-title v-mid underline pointer" to="/kyc">Go back to KYC</Link>
						</>						
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
