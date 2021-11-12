import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LabelTextInput from '.';

describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const props = {
      onChangeTextValue: () => {},
      titleTextStyle: {},
      inputTextStyle: {},
      titleText: '',
      subTitle: '',
      value: '',
      currency: '',
      textInputId: '',
      inputTextValue: '',
    };
    const wrapper = shallow(<LabelTextInput {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
