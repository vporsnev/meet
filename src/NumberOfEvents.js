import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = { numOfEvents: 32 };

  handleInputChanged = (event) => {
    const changeValue = event.target.value;
    if (changeValue > 0 && changeValue <= 32) {
      this.setState({
        numOfEvents: changeValue,
        errText: ''
      });
    } else {
      this.setState({
        numOfEvents: 32,
        errText:'Select number from 1 to 32'
      });
    }
    this.props.updateEvents(undefined, changeValue);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errText} />
        <label>
          Number of Events:
          <input
            type="number"
            className="number-input"
            value={this.state.numOfEvents}
            onChange={this.handleInputChanged}
          />
        </label>
      </div>
    );
  }
};

export default NumberOfEvents;