import React from 'react';
import { mount } from 'enzyme';
import Formulario from '../../components/Formulario';

describe('<Formulario />', () => {
  let wrapper;

  beforeEach(() => {
    const guardarCategoria = jest.fn();
    wrapper = mount(<Formulario guardarCategoria={guardarCategoria} />);
  });

  test('mount', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be able to change the news category', () => {
    const categoria = 'business';
    const select = wrapper.find('select');
    select.simulate('change', { target: { value: categoria } });
    expect(wrapper.find('select').prop('value')).toBe(categoria);
  });
});