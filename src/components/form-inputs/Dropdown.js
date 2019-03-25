import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <div>
        <div >
          <input
            type="text"
            name={this.props.name}
            list="languages"
            className="basic-input-light mb3 input-reset w-100 h2 br2 ba ph2"
            placeholder={this.props.placeholder}/>
        </div>
        <datalist id="languages">
        <option value="Rap"></option>
        <option value="Rock"></option>
        <option value="Jazz"></option>
        </datalist>
      </div>
    );
  }
}

export default Dropdown;
