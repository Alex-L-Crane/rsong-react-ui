import React, { Component } from 'react';
import FieldsetLegend from '../form-inputs/FieldsetLegend'
import BasicInput from '../form-inputs/BasicInput';

class InputBlock extends Component {
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
					/>
					<a className="white f5 ttc dib">+ Add {this.props.metadataType}</a>
				</fieldset>
				{this.props.data ? this.props.data.map((element, index) => {
					return { ...this.props.inputDataComponent, props: { ...this.props.inputDataComponent.props, ...element }, key: index } 
				}) : <div></div>}
			</div>
		);
	}
}

export default InputBlock;
