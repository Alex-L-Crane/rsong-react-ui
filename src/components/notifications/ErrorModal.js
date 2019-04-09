import React, { Component } from 'react';
import Button from '../buttons/Button';

class ErrorModal extends Component {
    onClose = () => {
        this.props.closeErrorModal();
	}
	
	render() {
		return (
			<div className="fixed top-0 right-0 bottom-0 left-0 z-max bg-black">
				<section className="w-680 mt5 white center">
					<p className="f3 b">Error</p>
					<div className="overflow-x">
						<p className="f5 lh-copy">{this.props.errorMessage}</p>
                    </div>
					<div className="pv4">
						<Button
							name="close"
							buttonText="Close"
							theme="dark"
							onClick={this.onClose}
						/>
					</div>
				</section>
			</div>
		);
	}
}

export default ErrorModal;
