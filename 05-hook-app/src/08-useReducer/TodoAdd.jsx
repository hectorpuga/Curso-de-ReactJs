import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { onInputChange,onResetForm, id,
        description,
        done } = useForm({
            id: "",
            description: "",
            done: false
        });


    const onFormSubmit = (event) => {

        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        };

        onNewTodo(newTodo)
        onResetForm();
    }
    return (
        <form onSubmit={onFormSubmit} >
            <input name="description"  type="text" placeholder="¿Que hay que hacer?" value={description} className="form-control" onChange={onInputChange} />
            <button type="submit" className="btn btn-outline-primary mt-1" >Agregar</button>
        </form>
    )
}
