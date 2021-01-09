import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas de GifGrid', () => {

  const category = 'Voy';


  test('Debe mostrar el componente correctamente', () => {

    useFetchGifs.mockReturnValue({

      data: [],
      loading: true

    }); // Falcenando la data de el Hook

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

    const gifs = [{
      id: 'Hola bebe',
      url: 'https://www.google.com',
      title: 'Cualquier cosa'
    }]
    
    useFetchGifs.mockReturnValue({

      data: gifs,
      loading: false

    }); // Falcenando la data de el Hook

    const wrapper = shallow(<GifGrid category={category} />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGidItem').length ).toBe( gifs.length );
  })
})