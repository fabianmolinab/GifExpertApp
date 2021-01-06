import { getGifs } from '../../../helpers/getGifs';

describe('Pruebas con getGifs Fecth', () => {

  test('debe de taer 50 elementos', async () => {
    
    const gifs = await getGifs('feliz');

    expect(gifs.length).toBe(50);
  });

  test('debe de taer 50 elementos', async () => {
    
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
  
});