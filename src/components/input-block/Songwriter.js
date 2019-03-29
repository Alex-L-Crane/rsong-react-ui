import React, { Component } from 'react';
import BasicInput from '../form-inputs/BasicInput'
import FieldsetLegend from '../form-inputs/FieldsetLegend'

class Songwriter extends Component {
  render() {
    return (
      <fieldset className="db ba br1 b--white pa0">
          <FieldsetLegend
            theme="dark"
            delete={true}
            formTitle={this.props.formTitle}
            additionalClasses="pa3"/>

        <section className="w-100 bg-white pt3 pr0 pb0 pl3 flex justify-between">
          <div className="w-50">
            <span className="w-100 br1 bg-black white pa2 f6 lh-copy dib border-box">Percentage of total song is divided between various songwriters. Publisher percentage is the split between the pubblisher and individual songwriter.</span>
          </div>

          <div className="w-34">
            <BasicInput
              type="text"
              name="songwriterPercentage"
              placeholder="50"
              labelText="Percentage of total song"/>
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
              labelText="Publisher"/>
          </div>

          <div className="w-34">
            <BasicInput
              type="text"
              name="publisherPercentage"
              placeholder="50"
              labelText="Publisher percentage"/>
          </div>

          <div className="w-10 flex items-end">
            <span className="f3 lh-solid dib ph0 mb3">%</span>
          </div>
        </section>


        <section className="w-100 bg-white pt1 pr0 pl3 flex justify-between">
          <div className="w-50">
            <BasicInput
              type="text"
              name="songName"
              placeholder="Address"
              labelText="REV wallet address"/>
          </div>

          <div className="w-34">
            <BasicInput
              type="text"
              name="email"
              placeholder="Email"
              labelText="Email if no REV address"/>
          </div>

          <div className="w-10">
          </div>
        </section>

        <section className="w-100 bg-white pt1 pr0 pl3 flex justify-between">
          <div className="w-50">
            <BasicInput
              type="text"
              name="pro"
              placeholder="ASCAP"
              labelText="Publishing Rights Organization"/>
          </div>

          <div className="w-34">
            <BasicInput
              type="text"
              name="iswc"
              placeholder="Org"
              labelText="ISWC"/>
          </div>

          <div className="w-10">
          </div>
        </section>
      </fieldset>
    );
  }
}

export default Songwriter;
