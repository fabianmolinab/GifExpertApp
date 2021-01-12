import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', async () => {

  test('Debe de return el estado inicial', () => {

    const { result, waitForNextUpdate } = renderHook(() => {
      useFetchGifs('Fabian')
    });
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })
  test('debe de retornar un arreglo de imagenes y el loading en false', () => {

    const { result, waitForNextUpdate } = renderHook(() => { useFetchGifs('Fabian') });

    await waitForNextUpdate;
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })
})
