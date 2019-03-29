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
		this.props.addNew(this.state.value);
		this.setState({ value: '' });
	}

	onChange = (event) => {
		this.setState({ value: event.target.value })
	}

	render() {
		return (
			<div className="bg-black pa4 mb5 br1 bn flex flex-column">
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
						onChange={this.onChange}
					/>
					<a className="white f5 ttc dib" onClick={this.addNew}>+ Add {this.props.metadataType}</a>
				</fieldset>
				{this.props.data ? this.props.data.map((element, index) => {
					const onDelete = () => this.props.onDelete(index);
					return {
						...this.props.inputDataComponent,
						props: { 
							...this.props.inputDataComponent.props,
							...element,
							onDelete
						}, 
						key: index
					} 
				}) : <div></div>}
			</div>
		);
	}
}

export default InputBlock;
