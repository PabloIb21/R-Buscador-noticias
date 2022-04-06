import React from 'react';
import { mount } from 'enzyme';
import Noticia from '../../components/Noticia';

describe('<Noticia />', () => {
  test('mount', () => {
    const noticia = {
      urlToImage: 'https://google.com/image.jpg', 
      url: 'https://google.com', 
      title: 'Hola Mundo',
      description: 'lorem ipsum',
      source: 'google.com'
    }

    const wrapper = mount(<Noticia noticia={noticia} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3').text()).toBe('Hola Mundo');
    expect(wrapper.find('.card-content p').text()).toBe('lorem ipsum');
  });
});