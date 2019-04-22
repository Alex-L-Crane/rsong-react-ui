import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { logout as logoutAuth } from '../../redux/actions/authActions';
import { logout } from '../../helpers/logout';
import { resetSongs } from '../../redux/actions/songsActions';
import { resetKycStatus } from '../../redux/actions/kycActions';

class MainNavLinks extends Component {

	logout = () => {		
		if (localStorage.login) {
			logoutAuth()
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
			logout(this.props.history);
		}
	}

	render() {
		return (
			<ul className="list white flex">
				<li className="mr4">
					<NavLink exact className="white link pt2 ttu" activeClassName="bt bw2 b--white" to="/">songs</NavLink>
				</li>
				<li className="mr4">
					<NavLink className="white link pt2 ttu" activeClassName="bt bw2 b--white" to="/account">account</NavLink>
				</li>
				<li className="mr4">
					<span className="pt2 ttu" onClick={this.logout}>log out</span>
				</li>
			</ul>);
	}
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
		resetSongs: () => dispatch(resetSongs()),
		resetKycStatus: () => dispatch(resetKycStatus()),		
    }
}

const MainNavLinksRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainNavLinks);

export default withRouter(MainNavLinksRedux);
