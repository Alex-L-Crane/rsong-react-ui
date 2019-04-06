import React, { Component } from 'react';

class OwnersReview extends Component {
	render() {
		return (
			<div>
                <span className="f3 dib pv4">{this.props.formTitle}</span>
                {this.props.role !== '' ?
                    <p>
                        <span className="f4 dib"><i>Role:</i></span>
                        <span className="f4 dib">{this.props.role}</span>
                    </p>
                    : <></>
                }
                {this.props.ownerPercentage !== '' ?
                    <p>
                        <span className="f4 dib"><i>Percentage:</i></span>
                        <span className="f4 dib">{this.props.ownerPercentage} %</span>
                    </p>
                    : <></>
                }
                {this.props.wallet !== '' ?
                    <p>
                        <span className="f4 dib"><i>REV Wallet Address:</i></span>
                        <span className="f4 dib">{this.props.wallet}</span>
                    </p>
                    : <></>
                }
                {this.props.email !== '' ?
                    <p>
                        <span className="f4 dib"><i>Email if no REV wallet:</i></span>
                        <span className="f4 dib">{this.props.email}</span>
                    </p>
                    : <></>
                }
                {this.props.isrc !== '' ?
                    <p>
                        <span className="f4 dib"><i>ISRC:</i></span>
                        <span className="f4 dib">{this.props.isrc}</span>
                    </p>
                    : <></>
                }                                
            </div>
        );
	}
}

export default OwnersReview;
