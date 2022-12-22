import React from 'react'
import TodoItem from './TodoItem'

export default function Todos({ list, onDelete }) {
  return (
    <div className="container">
      <br />
      <h2 className='text-center'>My Todo List</h2>
      <br />
      <div className="container">
        {list.length === 0 ? <h5 className='text-center'>No Data to display</h5> :
          list.map((i) => {
            return (
              <TodoItem i={i} key={i.id} onDelete={onDelete} />
            )
          })
        }
      </div>
    </div>
  )
}
