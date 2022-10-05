# Meet App
A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
## Key Features

### FEATURE 1: FILTER EVENTS BY CITY

> As  a  user,  I  would  like  to  be  able  to  filter  events  by  city  so  that  I  can  see  the  list  of  events  that  take  place  in  that  city.  

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.


**Given** user hasn’t searched for any city

**When** the user opens the app

**Then** the user should see a list of all upcoming events


> As a user, I would like to see a list of suggested city names when I start typing in a search box

Scenario 2: User should see a list of suggestions when they search for a city.


**Given** the main page is open

**When** user starts typing in the city textbox

**Then** the user should see a list of cities (suggestions) that match what they’ve typed


> As a user, I would like to be able to choose on of the cities suggested in the search box

Scenario 3: User can select a city from the suggested list.

**Given** the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing

**When** the user selects a city (e.g., “Berlin, Germany”) from the list

**Then** their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

> As a user, I would like to see a list of all events.

Scenario 1: An event element is collapsed by default.

**Given** user searched by city

**When** user got a list of all events in the city

**Then** every event has minimum of necessary infomation

> As a user, I would like to choose an event that I am interested in and click to reveal detailed information

Scenario 2: User can expand an event to see its details.

**Given** user got a list of events with minimum information

**When** user clicks on event

**Then** user sees an expanded information about the event

> As a user, I would like to click to hide detailed information to see the list of further events

Scenario 3: User can collapse an event to hide its details.

**Given** user sees detailed information about event

**When** user clicks again on event

**Then** detailed information gets hidden and user can see all of the events

### FEATURE 3: SPECIFY NUMBER OF EVENTS

> As a user, I would like to see a list with a number of events by default, to.

Scenario 1: When user hasn’t specified a number, 32 is the default number.

**Given** user did not choose an amout of events

**When** user searches for events

**Then** user sees a default amount (32) of events in the city

> As a user, I would like to change the amount of events shown.

Scenario 2: User can change the number of events they want to see.

**Given** list of default amount of events is shown

**When** user changes number of events

**Then** user sees as many events as he specified

### FEATURE 4: USE THE APP WHEN OFFLINE

> As a user, I would like to able to access the app in offline, so that I can check events when I don't have an internet connection.

Scenario 1: Show cached data when there’s no internet connection.

**Given** user doesn't have an internet connection

**When** user opens an app

**Then** app should show cached data

> As a user, I would like to see an error message when I change city or time range, so that I would be able to see my mistake.

Scenario 2: Show error when user changes the settings (city, time range).

**Given** app is offline

**When** user changes city and time

**Then** an error message pops out

### FEATURE 5: DATA VISUALIZATION

> As a user, I would like to see data visualisation of all of the upcoming events, so that I can make my plans.

Scenario 1: Show a chart with the number of upcoming events in each city.

**Given** user has chosen the city and time period

**When** user wants to see the data about all upcoming events visualised

**Then** user can choose a visualisation of data

## Technical Features

● The is a React application. 

● The is built using the TDD technique.  

● The uses the Google Calendar API and OAuth2 authentication flow.

● The uses serverless functions (AWS  lambda) for the authorization server instead of using a traditional server.  

● The  app’s  code  is  hosted  in  a  Git  repository  on  GitHub.  

● The  app  works  on  the  latest  versions  of  Chrome,  Firefox,  Safari,  Edge,  and  Opera,  as  well  as  on  IE11. 

● The  displays  well  on  all  screen  sizes  (including  mobile  and  tablet)  widths  of  1920px  and  320px.  

● The  passes  Lighthouse’s  PWA  checklist .  

● The  works  offline  or  in  slow  network  conditions  with  the  help  of  a  service  worker.

● Users  are  able  to  install  the  app  on  desktop  and  add  the  app  to  their  home  screen  on  mobile.  

● The  is  deployed  on  GitHub  Pages.  

● The  API  call  uses  React  axios  and  async/await.  

● The  app  implements  an  alert  system  using  an  OOP  approach  to  show  information  to  the  user. 

● The  app  makes  use  of  data  visualization.  

● The  app  is  covered  by  tests  with  a  coverage  rate  >=  90%.  

● The  app  is  monitored  using  an  online  monitoring  tool.
