import React, { Component } from 'react';
import Select, { components } from 'react-select';

class Dropdown extends Component {

    handleChange = (event) => {
        this.props.onChange(this.props.name, event);
    }

    render() {
        const Control = ({ children, ...props }) => {
            return(
            <components.Control {...props} className={`basic-input-light border-box mb3 input-reset w-100 h2 br2 ba ph2 pointer
                ${this.props.disabled ? 'b--gray' : ''}
                ${this.props.error ? 'b--red' : ''}`}
            >
                {children}
            </components.Control>
          );
        }

        const IndicatorSeparator = ({ innerProps }) => {
            return (
                <span {...innerProps}/>
            );
        };
          
        return (
            <div>
                <Select
                components={{ Control, IndicatorSeparator }}
                styles={{
                    control: (base) => {
                        delete base.border;
                        delete base.borderRadius;
                        delete base.borderColor;
                        delete base.borderStyle;
                        delete base.boxShadow;
                        delete base['&:hover'];
                        return ({ ...base })
                    },
                    placeholder: (base) => ({ ...base, font: '400 18px sans-serif'})
                  }}
                    value={this.props.value}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    isClearable={true}
                    
                    options={
                        Array.isArray(this.props.options) ? 
                        this.props.options.map(option => {
                            const id = option._id ? option._id : option.name
                            let obj = { value: option.name, label: option.name, id };
                            return obj;
                        })
                        : []
                    }
                />
            </div>
        );
    }
}

export default Dropdown;
