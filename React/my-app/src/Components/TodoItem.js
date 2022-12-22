import React from 'react'

export default function TodoItem(props) {

  return (
    <div>
      <h4>{props.i.id}</h4>
      <h6>{props.i.item}</h6>
      <p>{props.i.means}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.i)}}>Delete Item</button>
      <hr />
    </div>
  )
}
