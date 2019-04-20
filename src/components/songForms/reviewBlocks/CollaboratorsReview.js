import React, { Component } from 'react';
import ReviewRow from './ReviewRow';

class CollaboratorsReview extends Component {
	render() {
		return (
			<div>
                <span className="f3 dib pv4">{this.props.formTitle}</span>
                {this.props.role !== '' ?
										<ReviewRow
											labelText="Role"
											value={this.props.role}
										/>
                    : <></>
                }
                {this.props.ownerPercentage !== '' ?
										<ReviewRow
											labelText="Percentage"
											value={this.props.ownerPercentage}
											percent={true}
										/>
                    : <></>
                }
                {this.props.wallet !== '' ?
										<ReviewRow
											labelText="REV Wallet Address"
											value={this.props.wallet}
										/>
                    : <></>
                }
                {this.props.email !== '' ?
										<ReviewRow
											labelText="Email if no REV wallet"
											value={this.props.email}
										/>
                    : <></>
                }
                {this.props.isrc !== '' ?
										<ReviewRow
											labelText="ISRC"
											value={this.props.isrc}
										/>
                    : <></>
                }
            </div>
        );
	}
}

export default CollaboratorsReview;
