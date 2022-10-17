Feature: Show/Hide an event's details

Scenario: An event element is collapsed by default.
Given user searched by city
When user got a list of all events in the city
Then every event has minimum of necessary infomation

Scenario: User can expand an event to see its details.
Given user got a list of events with minimum information
When user clicks on event
Then user sees an expanded information about the event

Scenario: User can collapse an event to hide its details.
Given user sees detailed information about event
When user clicks again on event
Then detailed information gets hidden and user can see all of the events