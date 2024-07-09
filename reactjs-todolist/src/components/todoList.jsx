import React from 'react'
import TodoCard from './todoCard'

export default function TodoList(props) {
  const {todos} = props

  return (
    <ul className='main'>
        <div>{todos.map((todo, todoIndex)=>{
            return(
                <TodoCard {...props} key={todoIndex} index = {todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}</div>

    </ul>
  )
}


