import TodoCard from "./TodoCard"

export default function TodoList(properties) {
    const {todos, handleDeleteTodo, handleEditTodo} = properties
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard index={todoIndex} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )        
            })}
        </ul>
    )
}