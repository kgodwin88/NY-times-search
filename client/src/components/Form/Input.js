import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
      <div className="form-group">
        <input className="form-control" {...this.props} />
      </div>
    );
  }
}
export default Input;
