import React, { Component } from 'react';

class FileInput extends Component {
	render() {
		return (
			<span className={`dotted-border ba dib pa0 w-100 h-100 flex items-center justify-center
											${this.props.disabled ? 'b--gray' : ''}
											${this.props.error ? 'b--red' : ''}`}>
				{this.props.image && this.props.image !== '' ?
					(
						<img className="max-h-100 max-w-100" src={this.props.image} alt="" />
					) : (
						<>
							<input
								type="file"
								name={this.props.name}
								placeholder={this.props.placeholder}
								id={this.props.name}
								className="hidebbutton"
								onChange={this.props.onChange}
							/>
							<label htmlFor={this.props.name} className="white pv2 ph4 br1 bg-black tc f5 pointer">Choose file</label>
						</>
					)
				}
			</span>
		);
	}
}

export default FileInput;
