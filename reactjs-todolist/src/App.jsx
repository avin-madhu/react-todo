import { useState, useEffect } from "react"
import TodoInput from "./components/todoInput"
import TodoList from "./components/todoList"


function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState([])

  function persistData(newList)
  {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
    
  }

  function handleAddTodos(newtodos)
  {
     const newList = [...todos, newtodos]
     persistData(newList)
     setTodos(newList)
  }

  function handleDelete(index)
  {
    const newList = todos.filter((todo, todoIndex)=>{
      return todoIndex != index
    })
    persistData(newList)
    setTodos(newList)
  }


  function handleEditTodo(index)
  {
     const valueToBeEdited = todos[index]
     setTodoValue(valueToBeEdited)
     handleDelete(index)
  }

  useEffect(()=>{
    if(!localStorage)
    {
      return
    }

    let localtodos = localStorage.getItem('todos')
    if (localtodos)
    {
      localtodos = JSON.parse(localtodos).todos
      setTodos(localtodos)
    }
  })
  return (
    <>
        <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue}  handleAddTodos={handleAddTodos}/>
        <TodoList handleEditTodo = {handleEditTodo} handleDelete = {handleDelete} todos = {todos}/>
    </>
  )
}

export default App
