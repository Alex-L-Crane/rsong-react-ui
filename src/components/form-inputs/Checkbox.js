import React, { Component } from 'react';

class Checkbox extends Component {
	render() {
		return (
			<span className="checkbox-container ph0">
				<input
					type="checkbox"
					name={this.props.name}
					id={this.props.name}
					className="hidebbutton"
					checked={this.props.checked}
					onChange={this.props.onChange}
				/>
				<label htmlFor={this.props.name}
								className={`${ this.props.theme === 'dark' ? 'white checkmarkWhite' : 'checkmark' }
								dib w2 h2 br1 ba tc f5 pointer v-mid
								${this.props.disabled ? 'b--gray' : ''}
								${this.props.error ? 'b--red' : ''}
								`}>
				</label>
			</span>
		);
	}
}

export default Checkbox;
