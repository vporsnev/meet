import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let event, EventWrapper;
    beforeAll(() => {
      event = mockData[0];

      EventWrapper = shallow(<Event event={event} />);
  });

  test('render event title', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });

  test('render event title correctly', () => {
    expect(EventWrapper.find('.event-title').text()).toBe(
      event.summary
    );
  });

  test('render info in event item', () => {
    expect(EventWrapper.find('.event-info')).toHaveLength(1);
  });

  test('render event info correctly', () => {
    // expect(EventWrapper.find('.event-info').text()).toContain(
    //   event.start.dateTime
    // );
    // expect(EventWrapper.find('.event-info').text()).toContain(
    //   event.start.timeZone
    // );
    expect(EventWrapper.find('.event-info').text()).toContain(event.location);
  });

  test('render event collapsed by default', () => {
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('render show details button in the collapsed event', () => {
    expect(EventWrapper.find('.details-button')).toHaveLength(1);
  });

  test('render click to show event details', () => {
    EventWrapper.setState({
      show: false
    });
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.state('show')).toBe(true);
  });

  test('render click to hide event details', () => {
    EventWrapper.setState({
      show: true
    });
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('render expanded event', () => {
    EventWrapper.setState({
      show: true
    });
    // expect(EventWrapper.find('.expandedEvent').text()).toContain(
    //   event.description
    // );
    // expect(EventWrapper.find('.expandedEvent').text()).toContain(
    //   event.end.dateTime
    // );
    expect(EventWrapper.find('.details-button')).toHaveLength(1);
  });

  test('render after click hide event details', () => {
    EventWrapper.setState({
      show: false
    });

    expect(EventWrapper.find('.expandedEvent')).toHaveLength(0);
  });

});