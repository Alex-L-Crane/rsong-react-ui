import React, { Component } from 'react';

class ReviewContainer extends Component {
	render() {
		return (
			<section className="mb5 w-100 bg-black white pa3 border-box br1">
                <span className="f3 b">{this.props.title}</span>
				{this.props.data ? this.props.data.map((element, index) => {
					return {
						...this.props.reviewComponent,
						props: {
							...this.props.reviewComponent.props,
							...element,
						},
						key: index
					}}) : <></>
                }
			</section>
		);
	}
}

export default ReviewContainer;
