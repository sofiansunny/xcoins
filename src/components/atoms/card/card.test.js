import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CardView from '.';
describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const props = {
      children: null,
      style: {},
    };
    const wrapper = shallow(<CardView {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
