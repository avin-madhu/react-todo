import { useState, useRef } from "react"
export default function TodoInput(props)
{
    const { handleAddTodos,todoValue, setTodoValue  } = props
    const buttonref = useRef(null)
    const handleKeyPressed = ((e)=>{
        if(e.key == 'Enter')
        {
            buttonref.current.click()
            handleAddTodos(todoValue)
            setTodoValue('')
        }
    })
    return(

        <header>
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder="Enter task..." type="text" onKeyDown={handleKeyPressed} />
            <button ref={buttonref} onClick={()=>{
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>add</button>
        </header>
    )
}