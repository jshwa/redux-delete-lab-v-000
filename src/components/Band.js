import React, { Component } from 'react';

class Band extends Component {
  render() {
    return(
      <div>
        <li key={this.props.band.id}>{this.props.band}</li>
      </div>
    );
  }
};

export default Band;
