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
						<p className="f5 lh-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus velit, vestibulum non pretium quis, pellentesque a quam. Nulla facilisi. Ut vestibulum ex ac vestibulum iaculis. Donec a sem id purus auctor vestibulum. Vestibulum mollis ipsum posuere efficitur faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi a maximus sapien, non laoreet odio. Morbi mattis mauris maximus ligula semper, a posuere nisi congue. Phasellus ultricies condimentum porta. In sed lectus non est luctus lacinia et id ligula. Phasellus hendrerit aliquam pharetra.</p>
						<p className="f5 lh-copy">Donec ac enim lorem. Praesent in massa sed orci mattis pulvinar. Vestibulum egestas eros vel purus rutrum, et consequat arcu tristique. Fusce maximus dapibus egestas. Integer placerat lectus eget mollis rhoncus. Cras tellus ex, tristique non porta non, laoreet eu libero. Nunc varius ipsum a turpis luctus dictum. Aliquam consectetur mi at augue placerat, ut maximus ligula rhoncus. Etiam nibh nisi, interdum non aliquam vel, egestas quis massa. In cursus felis in molestie pharetra. Nam nisl dolor, finibus vitae facilisis ac, viverra sed lacus.</p>
						<p className="f5 lh-copy">Aliquam suscipit dui est, et vehicula ante placerat sed. Aenean consequat lorem in est ornare, sed ullamcorper mauris volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur id lectus fermentum, pellentesque enim vitae, venenatis ligula. Quisque elit nibh, egestas sit amet luctus quis, malesuada in nulla. Aliquam quam nunc, dictum at erat in, maximus elementum turpis. Nulla egestas tortor id dictum vestibulum. Ut a imperdiet nisi. Nulla in mi ultricies, rutrum quam malesuada, pellentesque mi. Cras maximus, enim non faucibus consectetur, orci magna finibus orci, non gravida est eros quis orci. Etiam molestie mi libero, vitae dapibus justo hendrerit nec. Aenean dapibus metus varius pharetra placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor, ipsum in elementum ultrices, mi libero sollicitudin elit, vel dapibus justo metus ut nisl. Duis a mi id justo aliquam ultricies.</p>
						<p className="f5 lh-copy">Integer suscipit semper ex sit amet vehicula. In vitae molestie nisl. Aenean sodales purus id lacus aliquam, vehicula hendrerit ex iaculis. Morbi eu orci a justo volutpat dapibus. Aliquam eu semper sapien. Etiam rutrum sodales dui, ac tincidunt nunc dignissim eu. Integer venenatis cursus ante nec accumsan. Suspendisse malesuada, mauris vel aliquet facilisis, turpis enim tempus nunc, eu blandit velit erat non lorem.</p>
						<p className="f5 lh-copy">Curabitur eros turpis, fermentum et placerat sed, maximus vitae nibh. Quisque posuere, diam eu volutpat efficitur, nisi sem tempus orci, ac tristique lectus erat ultricies augue. Pellentesque sem felis, consequat nec congue ac, placerat quis magna. In hac habitasse platea dictumst. Quisque id hendrerit lacus. Nullam sit amet lorem in ipsum suscipit imperdiet. Sed aliquam ut odio vitae rutrum. Sed lorem ante, efficitur in lorem in, hendrerit tincidunt ex. Maecenas vitae massa vulputate, dapibus lorem ultricies, euismod dolor. Sed felis turpis, vehicula ac erat nec, consectetur placerat velit. Praesent luctus felis et augue malesuada maximus.</p>
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
