import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageView from '.';
import {EURO_ICON} from '../../../assets';

describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const props = {
      sourceIcon: EURO_ICON,
      style: {},
    };
    const wrapper = shallow(<ImageView {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
