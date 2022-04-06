import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('mount', () => {
    const wrapper = mount(<Header titulo="Hola Mundo" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.brand-logo').text()).toBe('Hola Mundo');
  });
});