import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    selectedLocation: 'all',
    numberOfEvents: 32
  }

    updateEvents = (location, eventCount) => {
      if (location === undefined) {
        location = this.state.seletedLocation;
      }
      if (eventCount === undefined) {
        eventCount = this.state.numberOfEvents;
      }
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
        this.setState({
          events: locationEvents.slice(0, eventCount),
          numberOfEvents: eventCount,
          selectedLocation: location
        });
      });
    }

    componentDidMount() {
      this.mounted = true;
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  
    componentWillUnmount(){
      this.mounted = false;
    }

  render() {
    return (
      <div className="App">
        <div className="logo">meet</div>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}>Events in {this.state.locations}</EventList>
      </div>
    );
  }
}

export default App;
