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
    numOfEvents: 32
  }

  updateEvents = (location, maxNumEvents) => {
    if (maxNumEvents === undefined) {
        maxNumEvents = this.state.numOfEvents;
    } else(
        this.setState({ numOfEvents: maxNumEvents })
    )
    if (location === undefined) {
        location = this.state.locationSelected;
    }
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
        this.setState({
          events: locationEvents.slice(0, maxNumEvents),
          numOfEvents: maxNumEvents,
          selectedLocation: location
        });
      });
    }

    componentDidMount() {
      this.mounted = true;
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events: events.slice(0, this.state.numOfEvents), 
            locations: extractLocations(events)
        });
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
