import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => { 

    test('getSaludo debe de retornar "Hola Héctor', () => {

        const name='Hector';
        const message= getSaludo(name);
        expect(message).toBe(`Hola ${name}`)
     })

 })