import React, { Component } from 'react';
import FieldsetLegend from '../form-inputs/FieldsetLegend'
import BasicInput from '../form-inputs/BasicInput';

class InputBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

	addNew = () => {
		if (this.state.value !== '') {
			this.props.addNew(this.state.value);
			this.setState({ value: '' });
		}
	}

	onChangeValue = (event) => {
		this.setState({ value: event.target.value })
	}

	render() {
		return (
			<div className="bg-black pl4 pt4 pr4 pb0 mb5 br1 bn flex flex-column">
				<fieldset className="dib w-50 bn pa0 mb4">
					<FieldsetLegend
						formTitle={this.props.metadataType + 's'}
						theme="dark"
						additionalClasses="ph0 pt0 pb3"
					/>
					<BasicInput
						name={this.props.metadataType}
						placeholder={'Name of ' + this.props.metadataType}
						theme="dark"
						value={this.state.value}
						onChange={this.onChangeValue}
					/>
					<a className="white f5 ttc dib" onClick={this.addNew}>+ Add {this.props.metadataType}</a>
				</fieldset>
				{this.props.data ? this.props.data.map((element, index) => {
					const onDelete = () => this.props.onDelete(index);
					const handleChange = (key, value) => this.props.handleChange(index, key, value);
					return {
						...this.props.inputDataComponent,
						props: {
							...this.props.inputDataComponent.props,
							...element,
							onDelete,
							handleChange,
							errors: this.props.errors[index]
						},
						key: index
					}
				}) : <div></div>}
			</div>
		);
	}
}

export default InputBlock;
