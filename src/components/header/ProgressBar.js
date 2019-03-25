import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    return (
      <nav className="w-100 flex ph0 pv3">
        <ul className="list gray flex f5 b pa0 bb b--gray pb2">
          <li className="w5">
            <span className={`ph0 ${this.props.progress === "first" ? 'white bb bw2 b--white pb2' : ''}`}>Song Info</span>
          </li>
          <li className="w5">
            <span className={`ph0 ${this.props.progress === "second" ? 'white bb bw2 b--white pb2' : ''}`}>Songwriters</span>
          </li>
          <li className="w5">
            <span className={`ph0 ${this.props.progress === "third" ? 'white bb bw2 b--white pb2' : ''}`}>Sound Owners</span>
          </li>
          <li className="w5">
            <span className={`ph0 ${this.props.progress === "fourth" ? 'white bb bw2 b--white pb2' : ''}`}>Review and Submit</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ProgressBar;
