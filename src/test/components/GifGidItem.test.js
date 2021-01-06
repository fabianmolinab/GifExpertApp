import React from 'react';

import {shallow} from 'enzyme';
import { GifGidItem } from '../../components/GifGidItem.js';

describe( 'Pruebas en <GifgridItem/>', () => {

  const title = "Fabian";
  const url   = "https://www.local.com";
  const wrapper = shallow ( <GifGidItem 
    title={ title } 
    url= { url }
    />);

  test( 'Debe mostrar el componente correctamente', () => {    
    
    expect( wrapper ).toMatchSnapshot();

  });
  test('Debe tener una img con la url y alt de los props', () => {

    const img = wrapper.find('img');
    
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test('El div debe tener el className animate__wobble', () => {
    const div = wrapper.find('div');

    expect(div.props().className.includes("animate__wobble")).toBe(true);

  })
});