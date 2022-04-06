import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('AppPage', () => {
  let wrapper;

  global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      status: 'ok',
      totalResults: 1,
      articles: [{
        urlToImage: 'https://google.com/image.jpg', 
        url: 'https://google.com', 
        title: 'Hola Mundo',
        description: 'lorem ipsum',
        source: 'google.com'
      }]
    }),
  })
);

  beforeEach(() => {
    wrapper = mount(<App />);
    fetch.mockClear();
  });

  test('mount', () => {
    expect(wrapper.find('.brand-logo').text()).toBe('Buscador de noticias');
  });

  test('should be able to search for business news', () => {
    wrapper.find('select').simulate('change', { target: { value: 'business' } });

    act(() => wrapper.find('form').simulate('submit'));

    expect(wrapper.find('h3').text()).toBe('Hola Mundo');
    expect(wrapper.find('.card-content p').text()).toBe('lorem ipsum');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});