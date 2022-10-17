import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    let AppWrapper;

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('user searched by city', () => {

        });

        when('user got a list of all events in the city', () => {
            AppWrapper = mount(<App />);
        });

        then('every event has minimum of necessary infomation', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .expandedEvent')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        given('user got a list of events with minimum information', () => {
            AppWrapper = mount(<App />);
        });

        when('user clicks on event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
        });

        then('user sees an expanded information about the event', () => {
            expect(AppWrapper.find('.event .expandedEvent')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('user sees detailed information about event', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate("click");
        });

        when('user clicks again on event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate("click");
        });

        then('detailed information gets hidden and user can see all of the events', () => {
            expect(AppWrapper.find('.event .expandedEvent')).toHaveLength(0);
        });
    });
});