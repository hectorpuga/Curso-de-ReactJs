
import {render,screen,cont, fireEvent} from '@testing-library/react'
import { CounterApp } from '../CounterApp';



describe('Pruebas en <CounterApp/>',()=>{

    const valorInicial=1;

    test
    ('debe de hacer match con el snapshot',()=>{

     const {container}=render(<CounterApp value={1}/>);
     
     expect(container).toMatchSnapshot();
     

        
    })


    test('debe de mostrar el valor inicial de 100 <CounterApp value{100}/>',()=>{

        render(<CounterApp value={valorInicial}/>);
        
        // expect(screen.getByTestId('test-valorInicial').innerHTML).toBe(valorInicial.toString());

        expect(screen.getByText(valorInicial)).toBeTruthy();
        // expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(valorInicial.toString())
        
   
           
       })
       

       test('debe de incrementar con el boton +1', () => {

        render(<CounterApp value={valorInicial}/>);

        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('2')).toBeTruthy()
       })

       test('debe de decrementar con el boton -1', () => {

        render(<CounterApp value={valorInicial}/>);

        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('0')).toBeTruthy()
       })

       test('debe de funcionar el boton de reset',()=>{
        render(<CounterApp value={valorInicial}/>);
        
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))

        expect(screen.getByText(1)).toBeTruthy()
       })

})