import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.top = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      top: this.top,
    };
  };

  render() {
    return (
      <div>
        <p style={this.getStyle()} className="Alert">
          {this.props.text}
        </p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(21, 63, 177)';
    this.top = '150px';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(162, 22, 22)';
    this.top = '270px';
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(255, 98, 0)';
    this.top = '90px';
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };