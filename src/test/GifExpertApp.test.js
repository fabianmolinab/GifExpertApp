import React from 'react';

import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe(' Pruebas de GifExpertApp ', () => {

  test(' Debe mostrar correctamente el componente ', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['Fabian', 'Love'];

    const wrapper = shallow(< GifExpertApp defaulCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);

  })

})