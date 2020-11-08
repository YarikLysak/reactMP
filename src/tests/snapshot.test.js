import React from 'react'
import { shallow } from 'enzyme'

import Logo from '../components/Core/Logo';

test('should render Logo', () => {
  const component = shallow(<Logo/>)
  expect(component).toMatchSnapshot();
});