import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonView from '.';
describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const props = {
      onPress: () => {},
      title: '',
      isDisabled: false,
    };
    const wrapper = shallow(<ButtonView {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
