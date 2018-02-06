import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    return(
      <ul>
        {this.props.store.bands.map(band => band)}
      </ul>
    );
  }
};

export default Bands;
