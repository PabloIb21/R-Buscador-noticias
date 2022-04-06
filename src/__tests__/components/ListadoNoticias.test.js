import React from 'react';
import { mount } from 'enzyme';
import ListadoNoticias from '../../components/ListadoNoticias';

describe('<ListadoNoticias />', () => {
  test('mount', () => {
    const noticias = [
      {
        urlToImage: 'https://google.com/image.jpg', 
        url: 'https://google.com', 
        title: 'Hola Mundo',
        description: 'lorem ipsum',
        source: 'google.com'
      }
    ];

    const wrapper = mount(<ListadoNoticias noticias={noticias} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3').text()).toBe('Hola Mundo');
  });
});