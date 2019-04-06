import React, { Component } from 'react';
import Button from '../buttons/Button'
import TextButton from '../buttons/TextButton'

class Duplicate extends Component {
	render() {
		return (
			<div className="fixed top-0 right-0 bottom-0 left-0 z-max bg-black">
				<section className="w-680 mt5 white center">
					<p className="f3 b">{this.props.songTitle} is processing</p>
					<div className="overflow-x">
						<p className="f5 lh-copy">You will recieve an email when it has been realeased on RSong.</p>
						<p className="f5 lh-copy">If you have another song to upload, you can start with a copy of all of the data you just entered by clicking copy below.</p>
					</div>
					<div className="pv4">
						<TextButton
							name="done"
							buttonText="Done"
							theme="dark"
							onClick={this.props.onDone}
						/>
						<Button
							name="copy"
							buttonText="Copy"
							theme="dark"
							onClick={this.props.onCopy}
						/>
					</div>
				</section>
			</div>
		);
	}
	}

export default Duplicate;
