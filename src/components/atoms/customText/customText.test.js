import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import CustomText from '.'
describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const props = {
      style: {},
      textType: 'regular' | 'bold' | 'light',
    }
    const wrapper = shallow(<CustomText {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
