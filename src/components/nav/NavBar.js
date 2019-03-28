import React, { Component } from 'react';
import logo from '../../assets/img/rchain-circlelogo.svg';
import MainNavLinks from './MainNavLinks';

class NavBar extends Component {
  render() {
    return (
      <nav className="w-100 flex justify-between">
        <div className="pt2 pl2"><img src={logo}  alt="" /></div>
        {this.props.noLinks ===  true ? '' : <MainNavLinks />}
      </nav>);
  }
}

export default NavBar;
