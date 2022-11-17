
function Todo({todos, toggle, removeTask }) {
    return (
        <div className="todo-one">
            <div className={todos.complete ? "todo-text strike" : "todo-text"} onClick={() => toggle(todos.id)}>
                {todos.task}
            </div>
            <div className="todo-delete" onClick={() => removeTask(todos.id)}>
                X
            </div>
        </div>
    )
}

export default Todo;