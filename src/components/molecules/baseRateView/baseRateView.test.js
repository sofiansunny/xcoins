import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import BaseRateView from '.';
import {EURO_ICON} from '../../../assets';

describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const props = {
      fromCurrencySymbol: '',
      toCurrencySymbol: '',
      conversionRate: 1,
    };
    const wrapper = shallow(<BaseRateView {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
