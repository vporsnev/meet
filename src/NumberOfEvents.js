import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = { numOfEvents: 32 };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value >= 33 || value <= 0) {
      this.setState({
        numOfEvents: value,
        errText: 'Please enter a number between 1 - 32.',
      });
    } else {
      return this.setState({
        numOfEvents: value,
        errText:''
      });
    }
    this.props.updateEvents(undefined, event.target.value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>
          Number of Events:
          <input
            type="number"
            className="number-input"
            value={this.state.numOfEvents}
            onChange={this.handleInputChanged}
          />
        </label>
        <ErrorAlert text={this.state.errText} />
      </div>
    );
  }
};

export default NumberOfEvents;