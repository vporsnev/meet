import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { OfflineAlert } from './Alert';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error   
    ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numOfEvents), 
          locations: extractLocations(events)
        });
      }
    });
    }
    if (!navigator.onLine) {
    this.setState({
      offlineText:
        "No internet connection. The data was loaded from previous cached session",
    });
    } else {
    this.setState({
      offlineText: '',
    });
  }
}

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, maxNumEvents) => {
    if (maxNumEvents === undefined) {
        maxNumEvents = this.state.numOfEvents;
    } else (
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

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <div className="logo">meet</div>
        <OfflineAlert text={this.state.offlineText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numOfEvents={this.state.numOfEvents} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
