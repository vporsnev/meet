import React, { Component } from "react";

class Event extends Component {
    toggleEventDetails = () => {
        this.setState({ show: !this.state.show });
      };

      state = { show: false };

  render() {
    const { event } = this.props;
    return (
        <div className="event">
            <h1 className="event-title">{event.summary}</h1>
            <p className="event-info">
            Time/date: {event.start.dateTime} Time zone: {event.start.timeZone} Location: {event.location}
          </p>
          {!this.state.show ? (
            <button
              className="showDetails-button"
              onClick={this.toggleEventDetails}
            >
              Show Details
            </button>
          ) : (
            <button
              className="hideDetails-button"
              onClick={this.toggleEventDetails}
            >
              Hide Details
            </button>
          )}
          {this.state.show && (
          <div className="expandedEvent">
            <p className="event-description">{event.description}</p>
            <h3>Ends: </h3><p className="event-end">{event.end.dateTime}</p>
            <h3>Creator: </h3><p>{event.creator.email}</p>
            <a
                href={event.htmlLink}
                target="_blank"
                className="event-link"
              >
                Event on Google Calendar
              </a>
          </div>
          )}
        </div>
        );
    }
  }
  
export default Event;