import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  // Stateful variable!
  // These variables allow React components to manage and store data that changes over time.
  // Unlike normal variables, state variables trigger a re-render of the component whenever
  // their value changes. This dynamic behavior enables React components to return active data
  // updates and provide an ideal user experience. 
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  /**
   * This stores an array of todos in local storage
   * @param array todos 
   */
  function persistTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  /**
   * @param string newTodo
   */
  function handleAddTodos(newTodo){
    // this uses the spread operator "..." to copy the elements of the array to a new one
    const newTodoList = [...todos, newTodo]
    persistTodos(newTodoList)
    setTodos(newTodoList)
  }

  /**
   * @param int index of the todo to be deleted
   */
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {return todoIndex !== index})
    persistTodos(newTodoList)
    setTodos(newTodoList)
  }

  /**
   * 
   * @param int index of the todo to be edited, so it's deleted and its content set to fill the add box
   */
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  // useEffect listen to events and run something when some variable changes.
  // If left empty, as [], it works when page loads, as it's the case
  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos)
    setTodos(localTodos)
  }, [])
  return (
    <>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
        <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
