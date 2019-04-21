import React, { Component } from 'react';
import Button from '../buttons/Button'
import TextButton from '../buttons/TextButton'

class Terms extends Component {
	acceptTos = () => {
		this.props.handleChange(true);
	}

	declineTos = () => {
		this.props.handleChange(false);
	}

	render() {
		return (
			<div className="fixed top-0 right-0 bottom-0 left-0 z-max bg-black">
				<section className="w-960 mt5 white center">
					<p className="f3 b">Terms of service</p>
					<div className="overflow-x vh-50">
						<p className="f5 lh-copy">The RSONG platform is currently under construction. No money will be transacted until further notice. Please contact an RSONG representative for more information.</p>
					</div>
					<div className="pv4">
						<TextButton
							name="decline"
							buttonText="Decline"
							theme="dark"
							onClick={this.declineTos}
						/>
						<Button
							name="accept"
							buttonText="Accept"
							theme="dark"
							onClick={this.acceptTos}
						/>
					</div>
				</section>
			</div>
		);
	}
}

export default Terms;
