import { JSDOM } from 'jsdom';
import { setupDOM } from './jsdom-setup.js';
setupDOM();
import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopOverWrapper from './index.js';
import TestButton from './test-component.js';

configure({ adapter: new Adapter() });

let ComposedComponent;
let wrapper;
const TargetComponent = () => {
    return (
      <div id='test-target'>'Hello World'</div>
    )
}

describe('PopOver Component', () => {

  beforeEach(() => {
    ComposedComponent = PopOverWrapper(TargetComponent);
  })
  it('returns a valid React element', () => {
    expect(React.isValidElement(<ComposedComponent/>)).toBe(true);
  });
  it('renders without thrwoing an error', () => {
    wrapper = mount(<ComposedComponent/>);
    console.log(wrapper.state())
    wrapper.simulate('mouseenter')
    console.log(wrapper.state())

    wrapper = mount(<TestButton/>);
    console.log(wrapper.state())
    wrapper.simulate('mouseenter')
    console.log(wrapper.state()) 
  

    //expect(wrapper.find('#popover').getElement()).toBe(null);
  })

});