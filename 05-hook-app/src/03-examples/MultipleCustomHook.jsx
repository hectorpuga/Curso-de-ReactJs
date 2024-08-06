import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHook = () => {
useFetch()
  return (
   <>
   <h1>Información de Pokemon</h1>
   <hr />
   <pre>Pokemon Info</pre>
   </>
  )
}
