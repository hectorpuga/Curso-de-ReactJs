
describe('Pruebas en <DemoComponent></DemoComponent>', () => { 

    test('Esta prueba no debe de fallar',()=>{

        // 1. inicialización
        const message1= 'Hola Mundo';
    
        // 2. estimulo
    
        const message2= message1.trim();
    
        // 3. Observar el comportamiento... esperado
    
        // expect(message1).toBe(message2);
    
        expect(message1).toBe(message2)
    })

 })
