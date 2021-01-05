import React from 'react';

import {shallow} from 'enzyme';
import { GifGidItem } from '../../components/GifGidItem';

describe( 'Pruebas en <GifgridItem/>', () => {

  test( 'Debe mostrar el componente correctamente', () => {
    
    const wrapper = shallow( <GifGidItem/> )
    expect( wrapper).toMatchSnapshot();

  })

})