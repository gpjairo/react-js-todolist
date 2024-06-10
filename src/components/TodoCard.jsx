export default function TodoCard(properties) {
    const { children, index, handleDeleteTodo, handleEditTodo} = properties
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={()=>{handleEditTodo(index)}} >
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={()=>{handleDeleteTodo(index)}} >
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}