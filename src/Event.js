import React, { Component } from "react";
import Moment from 'react-moment';

class Event extends Component {
    toggleEventDetails = () => {
        this.setState({ show: !this.state.show });
      };

      state = { show: false };

  render() {
    const { event } = this.props;
    return (
        <div className="event">
            <h2 className="event-title">{event.summary}</h2>
            <span className="event-info">
            <h5>Start:</h5> <Moment>{event.start.dateTime}</Moment> 
            <h5>Location:</h5>{event.location}
          </span>
          <br></br>
          {!this.state.show ? (
            <button
              className="details-button"
              onClick={this.toggleEventDetails}
            >
              Show Details
            </button>
          ) : (
            <button
              className="details-button"
              onClick={this.toggleEventDetails}
            >
              Hide Details
            </button>
          )}
          {this.state.show && (
          <div className="expandedEvent">
            <p className="event-description">{event.description}</p>
            <h5>End: </h5><p className="event-end"><Moment>{event.end.dateTime}</Moment></p>
            <h5>Creator: </h5><p>{event.creator.email}</p>
            <a
                href={event.htmlLink}
                target="_blank"
                rel="noreferrer"
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