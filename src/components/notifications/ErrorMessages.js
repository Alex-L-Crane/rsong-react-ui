import React, { Component } from 'react';

export default class ErrorMessages extends Component {
	render() {
		return (
            <>
                {this.props.errorMessages.map((error) => 
                    <span key={error.id}>{error.message}</span>
                )}
            </>
		);
	}
}
