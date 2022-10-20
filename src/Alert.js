import React, { Component } from 'react';

class InfoAlert extends Component {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }

  render() {
    return (
      <div className="infoAlert">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class ErrorAlert extends Component {
    constructor(props) {
      super(props);
      this.color = 'red';
    }
  
    render() {
      return (
        <div className="errorAlert">
          <p>{this.props.text}</p>
        </div>
      );
    }
  }

export { InfoAlert, ErrorAlert };