import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba para custom hook useFetchGifs', () => {
  test('Debe retornar un arreglo y un bool true ', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Giphy')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toEqual(true);
  });
  test('Debe retornar un arreglo con 12 imagenes y un bool false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Giphy')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(12);
    expect(loading).toEqual(false);
  });
});
