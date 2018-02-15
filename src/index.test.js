import React from 'react';
import PopOver from './index.js';
import renderer from 'react-test-renderer';

let Component;
let ComposedComponent;
beforeEach(() => {
  Component = React.createElement('div');
  ComposedComponent = PopOver(Component);
})

describe('PopOver Component', () => {
  it('returns a valid React element', () => {
    expect(React.isValidElement(<ComposedComponent/>)).toBe(true);
  });

});