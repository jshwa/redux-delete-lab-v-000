import React, { Component } from 'react';
import Band from './band'

class Bands extends Component {
  render() {
    return(
      <ul>
        {this.props.store.band.map(band => <band band={band}/>)}
      </ul>
    );
  }
};

export default Bands;
