import React, { Component } from 'react';
import BasicInput from '../form-inputs/BasicInput'
import FieldsetLegend from '../form-inputs/FieldsetLegend'

class Collaborator extends Component {
  render() {
    return (
      <fieldset className="db ba br1 b--white pa0">
        <FieldsetLegend
          theme="dark"
          delete={true}
          formTitle={this.props.formTitle}
          additionalClasses="pa3"/>

        <section className="w-100 bg-white pt3 pr0 pl3 flex justify-between">
          <div className="w-50">
            <BasicInput
              type="text"
              name="role"
              labelText="Role"
              placeholder="Artist" />
          </div>

          <div className="w-34">
            <BasicInput
              type="text"
              name="ownerPercentage"
              placeholder="50"
              labelText="Percentage"/>
          </div>

          <div className="w-10 flex items-end">
            <span className="f3 lh-solid dib ph0 mb3">%</span>
          </div>
        </section>


        <section className="w-100 bg-white pt1 pr0 pl3 flex justify-between">
          <div className="w-50">
            <BasicInput
              type="text"
              name="wallet"
              labelText="REV Wallet Address"
              placeholder="Address"/>
          </div>

          <div className="w-34">
            <BasicInput
              type="text"
              name="email"
              labelText="Email if no REV wallet"
              placeholder="Email address" />
          </div>

          <div className="w-10 flex items-end">
            <span className="f3 lh-solid dib ph0 mb3">%</span>
          </div>
        </section>


        <section className="w-100 bg-white pt1 pr0 pl3 flex justify-between">
          <div className="w-50">
          </div>

          <div className="w-34">
            <BasicInput
              type="text"
              name="email"
              labelText="ISRC"
              placeholder="Org" />
          </div>

          <div className="w-10">
          </div>
        </section>
      </fieldset>
    );
  }
}

export default Collaborator;
