import React, { Component } from 'react';
import Button from '../buttons/Button'

class Info extends Component {
	render() {
		return (
			<div className="fixed top-0 right-0 bottom-0 left-0 z-max bg-black">
				<section className="w-680 mt5 white center">
					<p className="f3 b lh-title">A REV wallet is where you can recieve crypto payments.</p>
					<div>
						<p className="f5 lh-copy">If you have created a REV wallet, enter the address here. If you do not have a REV wallet, enter your email address in the “Email if no REV address” field and you will recieve an email inviting you to create a wallet. </p>
					</div>
					<div className="pv4">
						<Button
							name="dismiss"
							buttonText="Got it"
							theme="dark"
							onClick={this.props.onCloseInfo}
						/>
					</div>
				</section>
			</div>
		);
	}
}

export default Info;
