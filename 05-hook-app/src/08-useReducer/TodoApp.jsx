import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodo";

export const TodoApp = () => {

    // UseTodo

    const { todos, handleDeleteTodo, handleToogleTodo, handleNewTodo, todosCount, pendingTodosCount } = useTodos();

    return (
        <>
            <h1>TodoApp: {todosCount()} , Pendientes: {pendingTodosCount()}</h1>
            <hr />


            <div className="row">
                <div className="col-7">

                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToogleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />


                </div>

            </div>
        </>
    )
}
