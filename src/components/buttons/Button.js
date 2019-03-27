import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
		<span>
			<input
				type="button"
				name={this.props.name}
				id={this.props.name}
				className="hidebbutton"
				onClick={this.props.onClick}
			/>
			<label htmlFor={this.props.name} className="button dib white pv2 ph4 br1 bg-black tc f5 pointer">{this.props.buttonText}</label>
		</span>
    );
  }
}

export default Button;
