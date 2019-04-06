import React, { Component } from 'react';

export default class ErrorMessages extends Component {
	render() {
		return (
            <>
                {this.props.errorMessages.map((error) =>
                    <span key={error.id} className="red f5 dib ph0 pv3">{error.message}</span>
                )}
            </>
		);
	}
}
