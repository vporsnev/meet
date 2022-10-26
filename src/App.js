import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { OfflineAlert } from './Alert';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    offlineText: '',
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
        });
      });
    }

    getData = () => {
      const {locations, events} = this.state;
      const data = locations.map((location)=>{
        const number = events.filter((event) => event.location === location).length
        const city = location.split(', ').shift()
        return {city, number};
      })
      return data;
    };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <div className="logo">meet</div>
        <OfflineAlert text={this.state.offlineText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numOfEvents={this.state.numOfEvents} updateEvents={this.updateEvents}/>
        <h4>Events in each city</h4>

          <ResponsiveContainer height={400} >
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="number of events"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
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
