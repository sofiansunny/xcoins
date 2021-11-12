import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomTextInput from '.';
describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const props = {
      style: {},
      containerStyle: {},
      LeftComponent: null,
      RightComponent: null,
      placeholderText: null,
    };
    const wrapper = shallow(<CustomTextInput {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
