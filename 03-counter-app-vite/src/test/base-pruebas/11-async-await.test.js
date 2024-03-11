
import { string } from 'prop-types';
import {getImagen} from '../../base-pruebas/11-async-await'
describe('Pruebas en 11-async-await.js', () => { 

    test('getImagen debe de retornar un error si no tenemos api', async() => { 

        const url= await getImagen();
        console.log(url);
        expect( url).toBe('No se encontro la imagen');
        
     })
 })