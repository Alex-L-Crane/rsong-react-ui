import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        return (
            <div>
                <input
                    name={this.props.name}
                    list="languages"
                    className="basic-input-light mb3 input-reset w-100 h2 br2 ba ph2"
                    placeholder={this.props.placeholder} 
                />
                <datalist id="languages">
                    {Array.isArray(this.props.options)
                        ? this.props.options.map(option => (
                            <option
                                key={option.id.toString()}
                                value={option.name}>
                            </option>
                        ))
                        : null}
                </datalist>
            </div>
        );
    }
}

export default Dropdown;
