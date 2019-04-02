import React, { Component } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

class BasicDatePicker extends Component {
	render() {
		return (
			<label>
				<span className={`${ this.props.labelText ? '' : 'visuallyhidden' } dib pa0 mb2 ${ this.props.disabled ? 'gray' : '' }`}>
					{this.props.labelText}
				</span>
				<DatePicker
					name={this.props.name}
					selected={this.props.value}
					onChange={this.props.onChange}
					placeholderText={this.props.placeholder}
					className={`${this.props.theme === "dark" ? 'basic-input-dark border-box  b--white bg-black' : 'basic-input-light border-box'}
						input-reset w-100 h2 br1 ba ph2 mb3
						${this.props.disabled ? 'b--gray' : ''}
						${this.props.error ? 'b--red' : ''}
					`}
					disabled={this.props.disabled}
					dropdownMode="select"
					showMonthDropdown
					showYearDropdown
					maxDate={this.props.maxDate ? new Date() : undefined}
					minDate={this.props.minDate ? new Date() : undefined}
				/>
			</label>
		);
	}
}

export default BasicDatePicker;
