import React, { Component } from 'react';
import NavBar from '../nav/NavBar';
import PageTitle from './PageTitle';
import ProgressBar from './ProgressBar';

class AppHeader extends Component {
	render() {
		return (
			<div>
				<header className="bg-black pb3">
					<NavBar />
					<section className="ph5 pt4 pb2">
						<PageTitle title={this.props.pageTitle}/>
						{ this.props.progressStatus  ? <ProgressBar progress={this.props.progressStatus} /> : '' }
					</section>
				</header>
			</div>
		);
	}
}

export default AppHeader;
