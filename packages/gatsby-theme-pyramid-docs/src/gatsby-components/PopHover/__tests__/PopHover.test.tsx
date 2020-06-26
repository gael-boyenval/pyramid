import React from 'react';
import { mount } from 'enzyme';
import PopHover from '../PopHover';
import * as ComputePosition from '../ComputePosition';
import toJson from 'enzyme-to-json';

describe('<PopHover />', () => {
  let component;

  // add a div with #modal-root id to the global body
  const popHoverRoot = global.document.createElement('div');
  popHoverRoot.setAttribute('id', 'pop-hover');
  const body = global.document.querySelector('body');
  body.appendChild(popHoverRoot);

  afterEach(() => {
    component.unmount();
  });

  const mountPopHover = (side = 'auto') =>
    mount(
      <PopHover
        popSide={side}
        Content={() => <span className="tooltip">TOOLTIP CONTENT</span>}
      >
        <div className="trigger">TRIGGER</div>
      </PopHover>,
    );

  it('Should render the trigger only at first', () => {
    component = mountPopHover();
    expect(component.find('.trigger').exists()).toBeTruthy();
    expect(component.find('.tooltip').exists()).toBeFalsy();
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Should render the tooltip when mouseover the trigger', () => {
    component = mountPopHover();
    const wrapper = component.find(PopHover);

    // hovering the trigger => show
    wrapper.simulate('mouseover');
    expect(component.find('.tooltip').exists()).toBeTruthy();
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Should hide the tooltip when mouseleave the tooltip', () => {
    component = mountPopHover();
    const wrapper = component.find(PopHover);

    // hovering the trigger => show
    wrapper.simulate('mouseover');
    // mouse leave the tooltip => hide
    component.find('#tooltip').simulate('mouseleave');
    expect(component.find('#tooltip').exists()).toBeFalsy();
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Should works with keyboard nav (using focus)', () => {
    component = mountPopHover();
    const wrapper = component.find(PopHover);

    // when in focus => show
    wrapper.simulate('focus');
    expect(component.find('.tooltip').exists()).toBeTruthy();

    // when blur => hide
    wrapper.simulate('blur');
    expect(component.find('.tooltip').exists()).toBeFalsy();
  });

  it('Should position on the side where there is the most available space', () => {
    const defineBestSideSpy = jest.spyOn(ComputePosition, 'defineBestSide');

    component = mountPopHover();

    // there is more available space at Right here
    global.innerWidth = 1000;
    global.innerHeight = 600;
    const wrapper = component.find(PopHover);

    const getBoundingClientRectSpy = jest.fn(() => ({
      right: 200,
      top: 100,
      bottom: 200,
      left: 100,
      width: 100,
      height: 100,
      y: 0,
      x: 0,
      toJSON: () => {},
    }));

    Element.prototype.getBoundingClientRect = getBoundingClientRectSpy;

    // trigger display to compute position
    wrapper.simulate('focus');
    expect(defineBestSideSpy).toBeCalled();
    expect(component.find('.c-pop-hover--right').exists()).toBeTruthy();
  });

  it('Should allow manually setting tooltip side', () => {
    const defineBestSideSpy = jest.spyOn(ComputePosition, 'defineBestSide');
    // add popSide="left" prop
    component = mountPopHover('left');
    const wrapper = component.find(PopHover);

    wrapper.simulate('focus');
    expect(toJson(component)).toMatchSnapshot();
    expect(defineBestSideSpy).not.toHaveBeenCalled();
    expect(component.find('.c-pop-hover--left').exists()).toBeTruthy();
    expect(component.find('.c-pop-hover--right').exists()).toBeFalsy();
  });
});
