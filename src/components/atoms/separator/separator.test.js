import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Separator from '.';
import {EURO_ICON} from '../../../assets';

describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const props = {
      style: {},
    };
    const wrapper = shallow(<Separator {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
