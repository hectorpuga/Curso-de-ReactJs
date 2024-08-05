import { renderHook,screen,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {


    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('Naruto'))

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();



    })

    
    test('debe de regresar un arreglo de imagenes y isLoading en false', async() => {

        const { result } = renderHook(() => useFetchGifs('Naruto'))

        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0),
            {timeout:1000}
        )
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        console.log(images);


    })
})