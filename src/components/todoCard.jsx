import React from 'react'

export default function TodoCard(props) {
  const {children, handleDelete, index, handleEditTodo} = props
  return (
    <div>
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
               <button onClick={()=>{
                  handleEditTodo(index)
               }}><i className="fa-solid fa-pen-to-square"></i></button>
               <button onClick={()=>{
                  handleDelete(index)
               }}><i className="fa-solid fa-trash"></i></button>
            </div>

        </li>
    </div>
  )
}
