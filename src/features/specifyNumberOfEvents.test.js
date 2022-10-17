import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    let AppWrapper;

    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('user did not choose an amout of events', () => {
            
        });

        when('user searches for events', () => {
            AppWrapper = mount(<App />);
        });

        then('user sees a default amount 32 of events in the city', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(32);       
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('list of default amount of events is shown', async () => {
            AppWrapper = await mount(<App />);
        });

        when('user changes number of events', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventObject = { target: { value: 6 } };
            NumberOfEventsWrapper.find('.number-input').simulate('change',eventObject);
        });

        then('user sees as many events as he specified', () => {
            expect(AppWrapper.find('.EventList')).toHaveLength(1);
        });
    });
});