import React, { Component } from 'react';

class SongWriterReview extends Component {
	render() {
		return (
			<div>
                <span className="f3 dib pv4">{this.props.formTitle}</span>
                {this.props.songwriterPercentage !== '' ?
                    <p>
                        <span className="f4 dib"><i>Percentage of total song:</i></span>
                        <span className="f4 dib">{this.props.songwriterPercentage} %</span>
                    </p>
                    : <></>
                } 
                {this.props.publisherName !== '' ?
                    <p>
                        <span className="f4 dib"><i>Publisher:</i></span>
                        <span className="f4 dib">{this.props.publisherName}</span>
                    </p>
                    : <></>
                }  
                {this.props.publisherPercentage !== '' ?
                    <p>
                        <span className="f4 dib"><i>Publisher percentage:</i></span>
                        <span className="f4 dib">{this.props.publisherPercentage} %</span>
                    </p>
                    : <></>
                } 
                {this.props.wallet !== '' ?
                    <p>
                        <span className="f4 dib"><i>REV wallet address:</i></span>
                        <span className="f4 dib">{this.props.wallet}</span>
                    </p>
                    : <></>
                }  
                {this.props.email !== '' ?
                    <p>
                        <span className="f4 dib"><i>Email if no REV address:</i></span>
                        <span className="f4 dib">{this.props.email}</span>
                    </p>
                    : <></>
                } 
                {this.props.pro !== '' ?
                    <p>
                        <span className="f4 dib"><i>Publishing Rights Organization:</i></span>
                        <span className="f4 dib">{this.props.pro}</span>
                    </p>
                    : <></>
                }   
                {this.props.iswc !== '' ?
                    <p>
                        <span className="f4 dib"><i>ISWC:</i></span>
                        <span className="f4 dib">{this.props.iswc}</span>
                    </p>
                    : <></>
                }                                
            </div>
        );
	}
}

export default SongWriterReview;
