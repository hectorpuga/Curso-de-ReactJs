import { useForm } from "../hooks/useForm"
// import {Message} from "./Message";

export const FormWithCustomHook = () => {

    const { username,email,password, onInputChange,onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });




    return (
        <>
            <h1>Formulario con custmo Hook</h1>
            <hr />

            <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={onInputChange} />
            <input type="email" className="form-control  mt-2" placeholder="hector@google.com" name="email" value={email} onChange={onInputChange} />
            <input type="password" className="form-control  mt-2" placeholder="contraseña" name="password" value={password} onChange={onInputChange} />
          
          <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}

