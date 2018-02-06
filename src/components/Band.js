import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: "DELETE_BAND",
      id: this.props.id
    })
  }

  render() {
    return(
      <div>
        <li>{this.props.band}</li>
        <button onClick={this.handleOnClick}/>
      </div>
    );
  }
};

export default Band;
