import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {

    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);

  })



  test('debe de mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  });

  test('Evaluar cuando la caja de texto cambia', () => {

    const input = wrapper.find('input');
    const value = "Hola Fabian"

    input.simulate('change', {
      target: {
        value
      }
    }); //Simula el evento change con el value

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe de postear la información', () => {

    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });

    expect(setCategories).not.toHaveBeenCalled();

  });

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {

    const input = wrapper.find('input');
    const value = 'Hola Fabian';


    input.simulate('change', {
      target: {
        value
      }
    });

    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);// Hace varios llamados al setCategories
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // Espera que llame a una función

    expect(wrapper.find('input').prop('value')).toBe('')

  });
});
