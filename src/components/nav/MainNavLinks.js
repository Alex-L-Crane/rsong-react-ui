import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainNavLinks extends Component {
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
          <span className="pt2 ttu">log out</span>
        </li>
      </ul>);
  }
}

export default MainNavLinks;
