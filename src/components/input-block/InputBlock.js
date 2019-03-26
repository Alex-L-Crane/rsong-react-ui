import React, { Component } from 'react';
import FieldsetLegend from '../form-inputs/FieldsetLegend'
import BasicInput from '../form-inputs/BasicInput'
import AdditionalArtist from './AdditionalArtist'
import Songwriter from './Songwriter'
import Owner from './Owner'
import Collaborator from './Collaborator'

class ExpandableInputSection extends Component {
  render() {
      return (
        <div className="bg-black pa4 mb5 br1 bn flex flex-column">
          <fieldset className="dib w-50 bn pa0 mb4">
            <FieldsetLegend
              formTitle={this.props.metadataType + 's'}
              theme="dark"
              additionalClasses="ph0 pt0 pb3"/>

            <BasicInput
              name={this.props.metadataType}
              placeholder={'Name of ' + this.props.metadataType}
              theme="dark" />
            <a className="white f5 ttc dib">+ Add {this.props.metadataType}</a>
          </fieldset>

          { this.props.metadataType === 'additional artist' ? <AdditionalArtist componentType={this.props.metadataType} /> : '' }
          { this.props.metadataType === 'songwriter' ? <Songwriter componentType={this.props.metadataType} /> : '' }
          { this.props.metadataType === 'owner' ? <Owner componentType={this.props.metadataType} /> : '' }
          { this.props.metadataType === 'collaborator' ? <Collaborator componentType={this.props.metadataType} /> : '' }
        </div>
      );
    }
  }

export default ExpandableInputSection;
