import React, { Component } from 'react';
import ReviewRow from './ReviewRow';

class SongWriterReview extends Component {
	render() {
		return (
			<div className="mb5">
                <span className="f3 dib pb3">{this.props.formTitle}</span>
                {this.props.songwriterPercentage !== '' ?
										<ReviewRow
											labelText="Percentage of total song"
											value={this.props.songwriterPercentage}
											percent={true}
										/>
                    : <></>
                }
                {this.props.publisherName !== '' ?
										<ReviewRow
											labelText="Publisher"
											value={this.props.publisherName}
										/>
                    : <></>
                }
                {this.props.publisherPercentage !== '' ?
										<ReviewRow
											labelText="Publisher percentage"
											value={this.props.publisherPercentage}
											percent={true}
										/>
                    : <></>
                }
                {this.props.wallet !== '' ?
										<ReviewRow
											labelText="REV wallet address"
											value={this.props.wallet}
										/>
                    : <></>
                }
                {this.props.email !== '' ?
										<ReviewRow
											labelText="Email if no REV address"
											value={this.props.email}
										/>
                    : <></>
                }
                {this.props.pro !== '' ?
										<ReviewRow
											labelText="Publishing Rights Organization"
											value={this.props.pro}
										/>
                    : <></>
                }
                {this.props.iswc !== '' ?
										<ReviewRow
											labelText="ISWC"
											value={this.props.iswc}
										/>
                    : <></>
                }
            </div>
        );
	}
}

export default SongWriterReview;
