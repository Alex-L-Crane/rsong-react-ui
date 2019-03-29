import React, { Component } from 'react';
import FieldsetLegend from '../form-inputs/FieldsetLegend'

class AdditionalArtist extends Component {
  render() {
    return (
      <fieldset className="db ba br1 b--white pa0">
        <FieldsetLegend
          theme="dark"
          delete={true}
          formTitle={this.props.formTitle}
          additionalClasses="pa3"/>
      </fieldset>
    );
  }
}

export default AdditionalArtist;
