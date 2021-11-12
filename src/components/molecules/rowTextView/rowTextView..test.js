import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RowTextView from '.';

describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const props = {
      title: '',
      subTitle: '',
      value: '',
      titleTextStyle: '',
      currency: '',
    };
    const wrapper = shallow(<RowTextView {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
