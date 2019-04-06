import React, { Component } from 'react';
import BasicInput from '../form-inputs/BasicInput'
import TooltipInput from '../form-inputs/TooltipInput'
import FieldsetLegend from '../form-inputs/FieldsetLegend'
import Info from '../notifications/Info';

class Songwriter extends Component {
    constructor(props) {
        super(props);
        this.state = {
			showInfo: false,
        };
	}
	
	onChange = (event) => {
		this.props.handleChange([event.target.name], event.target.value)
	}

    onShowInfo = () => {
        this.setState({ showInfo: true });
    }

    onCloseInfo = () => {
        this.setState({ showInfo: false });
    }

	render() {
		return (
			<fieldset className="db ba br1 b--white pa0 mb4">
				<FieldsetLegend
					theme="dark"
					delete={true}
					formTitle={this.props.formTitle}
					additionalClasses="pa3"
					onDelete={this.props.onDelete}
				/>

				<section className="w-100 bg-white pt3 pr0 pb0 pl3 flex justify-between">
					<div className="w-50">
						<span className="w-100 br1 bg-black white pa2 f6 lh-copy dib border-box">Percentage of total song is divided between various songwriters. Publisher percentage is the split between the pubblisher and individual songwriter.</span>
					</div>

					<div className="w-34">
						<BasicInput
							type="text"
							name="songwriterPercentage"
							placeholder="50"
							labelText="Percentage of total song"
							value={this.props.songwriterPercentage}
							onChange={this.onChange}
							error={this.props.errors ? this.props.errors.songwriterPercentage : false}
						/>
					</div>

					<div className="w-10 flex items-end">
						<span className="f3 lh-solid dib ph0 mb3">%</span>
					</div>
				</section>

				<section className="w-100 bg-white pt1 pr0 pl3 flex justify-between">
					<div className="w-50">
						<BasicInput
							type="text"
							name="publisherName"
							placeholder="Name"
							labelText="Publisher"
							value={this.props.publisherName}
							onChange={this.onChange}
						/>
					</div>

					<div className="w-34">
						<BasicInput
							type="text"
							name="publisherPercentage"
							placeholder="50"
							labelText="Publisher percentage"
							value={this.props.publisherPercentage}
							onChange={this.onChange}
							error={this.props.errors ? this.props.errors.publisherPercentage : false}
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
							placeholder="Address"
							labelText="REV wallet address"
							value={this.props.wallet}
							onChange={this.onChange}
							disabled={true}
							onShowInfo={this.onShowInfo}
						/>
					</div>

					<div className="w-34">
						<BasicInput
							type="email"
							name="email"
							placeholder="Email"
							labelText="Email if no REV address"
							value={this.props.email}
							onChange={this.onChange}
							error={this.props.errors ? this.props.errors.email : false}
						/>
					</div>

					<div className="w-10" />
				</section>

				<section className="w-100 bg-white pt1 pr0 pl3 flex justify-between">
					<div className="w-50">
						<BasicInput
							type="text"
							name="pro"
							placeholder="ASCAP"
							labelText="Publishing Rights Organization"
							value={this.props.pro}
							onChange={this.onChange}
						/>
					</div>

					<div className="w-34">
						<BasicInput
							type="text"
							name="iswc"
							placeholder="Org"
							labelText="ISWC"
							value={this.props.iswc}
							onChange={this.onChange}
						/>
					</div>

					<div className="w-10" />

					{this.state.showInfo ? 
						<Info onCloseInfo={this.onCloseInfo} /> : <></> 
                	}
				</section>
			</fieldset>
		);
	}
}

export default Songwriter;
