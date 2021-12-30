import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas para el componente GifGrid', () => {
  test('Debe mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category="Giphy" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar correctamente los elementos', () => {
    const gifs = [
      { id: 'ABC', url: 'https://localhost/abc.jpg', title: 'LOCAL IMG' },
      { id: 'DEF', url: 'https://localhost/def.jpg', title: 'LOCAL DEF' },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category="ABC" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
