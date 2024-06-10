import { useState } from "react"

export default function TodoInput(properties) {
    const {handleAddTodos, todoValue, setTodoValue} = properties

    return (
        <header>
            <input value = {todoValue} 
                onChange = {(e) => {setTodoValue(e.target.value)}}
                placeHolder = "Enter to do..."
            />
            <button onClick={() => {
                // This ^^ is called "arrow function"
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}