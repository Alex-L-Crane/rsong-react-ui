import React, { Component } from 'react';

class FileInput extends Component {
	handleRemove = () => {
		this.props.handleRemove(this.props.name)
	}

	onChange = (event) => {
		if (this.props.fileType === 'song') {
			console.log(event.target.files[0].type.toLowerCase())
			if (event.target.files[0].type.toLowerCase() === 'audio/mp3' || 
				event.target.files[0].type.toLowerCase() === 'audio/mpeg' || 
				event.target.files[0].type.toLowerCase() === 'audio/wav' || 
				event.target.files[0].type.toLowerCase() === 'audio/x-wav' || 
				event.target.files[0].type.toLowerCase() === 'audio/flac'
			) {
				this.props.onChange(event);
			}
		} else {
			if (event.target.files[0].type.toLowerCase() === 'image/png' || 
				event.target.files[0].type.toLowerCase() === 'image/jpeg' || 
				event.target.files[0].type.toLowerCase() === 'image/jpg'
			) {
				this.props.onChange(event);
			}
		}

	}

	render() {
		return (
			<div className="ph0 pt0 pb3">
				<span className={`dotted-border ba dib pa0 flex items-center justify-center
												${this.props.disabled ? 'b--gray' : ''}
												${this.props.error ? 'b--red' : ''}
												${this.props.extraClass ? this.props.extraClass : ''}`}>
					{(this.props.image && this.props.image !== '') || this.props.song ?
						
						this.props.image ? 
							<img className="max-h-100 max-w-100" src={this.props.image} alt="" />
							:
							<span>Song uploaded</span>
						:
						<>
							<input
								type="file"
								name={this.props.name}
								placeholder={this.props.placeholder}
								id={this.props.name}
								className="hidebbutton"
								onChange={this.onChange}
								accept={this.props.fileType === 'song' ? '.mp3,.wav,.flac' : '.jpg,.jpeg,.png'}
							/>
							<label htmlFor={this.props.name} className="white pv2 ph4 br1 bg-black tc f5 pointer">Choose file</label>
						</>
						
					}
				</span>
				{(this.props.image && this.props.image !== '') || this.props.song ?
					<span className="f6 underline dib ph0 pv2 pointer" onClick={this.handleRemove}>Remove</span>
					:
					<></>
				}
			</div>
		);
	}
}

export default FileInput;
