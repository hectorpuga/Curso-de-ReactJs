import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value)

        },
        [],
    )

// Recordar, si no usaramos el UseCallback, este efect aria un bucle infinito, debido a que este efecto llamaria a una nueva función, y se renderizaria otra vez, si no tuvieramos el usecallback, ya que
// el usecallback, memoriza especificamente una función, esto se debe a que cada vez que se renderiza una función, es una nueva función ya que apunta a otro espacio de memoria diferente, al igual que los objetos
    // useEffect(() => {

    //     // incrementFather()
    // }, [incrementFather])
    // const incrementFather=()=>{
    //     setCounter(counter+1)
    // }

    return (
        <>
            <h1>UseCallback Hoook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>

    )
}
