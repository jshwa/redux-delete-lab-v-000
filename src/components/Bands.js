import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    return(
      <ul>
        {this.props.store.band.map(band => <Band band={band} store={this.props.store}/>)}
      </ul>
    );
  }
};

export default Bands;
