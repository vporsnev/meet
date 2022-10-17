Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given user did not choose an amout of events
When user searches for events
Then user sees a default amount 32 of events in the city

Scenario: User can change the number of events they want to see.
Given list of default amount of events is shown
When user changes number of events
Then user sees as many events as he specified