import { render,screen } from "@testing-library/react"
import { FirsApp } from "../FirstApp"

describe('Pruebas en <FirstApp/>', () => {

    const title='Hola Soy Goku';
    const subTitle='Soy un subtitulo';
    test('debe de hacer match con el snapshot', () => {

        const {container}=render(<FirsApp title={title}/>); 
        expect(container).toMatchSnapshot();

    })
    test('debe de mostrar el mensaje "Hola Soy Goku"', () => { 

        render(<FirsApp title={title}/>)
        // screen.debug()

        expect(screen.getByText(title)).toBeTruthy();
     })

     test('debe de mostrar el titulo en un h1',()=>{
        render(<FirsApp title={title}/>)

        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
        
     })
     
     test('debe de mostrar el subitulo enviado por props', () => { 
        render(<FirsApp title={title} subtitle={subTitle}/>);

        expect(screen.getAllByText(subTitle).length).toBe(2);

      })
})