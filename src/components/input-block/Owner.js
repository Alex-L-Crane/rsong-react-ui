import React, { Component } from 'react';
import BasicInput from '../form-inputs/BasicInput'
import TooltipInput from '../form-inputs/TooltipInput'
import FieldsetLegend from '../form-inputs/FieldsetLegend'

class Owner extends Component {
	onChange = (event) => {
		this.props.handleChange([event.target.name], event.target.value)
  	}

	render() {
		console.log(this.props)
		return (
			<fieldset className="db ba br1 b--white pa0 mb4">
				<FieldsetLegend
					theme="dark"
					delete={true}
					formTitle={this.props.formTitle}
					additionalClasses="pa3"
					onDelete={this.props.onDelete}
				/>

				<section className="w-100 bg-white pt3 pr0 pl3 flex justify-between">
					<div className="w-50">
						<BasicInput
							type="text"
							name="role"
							labelText="Role"
							placeholder="Artist"
							value={this.props.role}
							onChange={this.onChange}
							error={this.props.errors ? this.props.errors.role : false}
						/>
					</div>

					<div className="w-34">
						<BasicInput
							type="text"
							name="ownerPercentage"
							placeholder="50"
							labelText="Percentage"
							value={this.props.ownerPercentage}
							onChange={this.onChange}
							error={this.props.errors ? this.props.errors.ownerPercentage : false}
						/>
					</div>

					<div className="w-10 flex items-end">
						<span className="f3 lh-solid dib ph0 mb3">%</span>
					</div>
				</section>


				<section className="w-100 bg-white pt1 pr0 pl3 flex justify-between">
					<div className="w-50">
						<TooltipInput
							type="text"
							name="wallet"
							labelText="REV Wallet Address"
							placeholder="Address"
							value={this.props.wallet}
							onChange={this.onChange}
							disabled={true}
						/>
					</div>

					<div className="w-34">
						<BasicInput
							type="email"
							name="email"
							labelText="Email if no REV wallet"
							placeholder="Email address"
							value={this.props.email}
							onChange={this.onChange}
							error={this.props.errors ? this.props.errors.email : false}
						/>
					</div>

					<div className="w-10 flex items-end">
						<span className="f3 lh-solid dib ph0 mb3"></span>
					</div>
				</section>


				<section className="w-100 bg-white pt1 pr0 pl3 flex justify-between">
					<div className="w-50" />

					<div className="w-34">
						<BasicInput
							type="text"
							name="isrc"
							labelText="ISRC"
							placeholder="Org"
							value={this.props.isrc}
							onChange={this.onChange}
						/>
					</div>

					<div className="w-10" />
				</section>
			</fieldset>
		);
	}
}

export default Owner;
