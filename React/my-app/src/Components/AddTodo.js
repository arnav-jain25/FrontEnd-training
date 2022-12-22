import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [item, setItem] = useState("")
    const [means, setMeans] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!item || !means) {
            alert('Cannot Add the item to To Do List')
        }
        else {
            props.addTodoToList(item, means)
            setItem("")
            setMeans("")
        }
    }

    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <br />
            <h3>Add Items to To Do List</h3>
            <form action="" onSubmit={submit}>
                <label htmlFor="item">Item - </label>
                <input type="text" name="item" id="item" value={item} onChange={(e) => { setItem(e.target.value) }} className='form-control' style={{ width: '30%', marginLeft: '35%' }} />
                <label htmlFor="means">Means of Transportation - </label>
                <input type="text" name="means" id="means" value={means} onChange={(e) => { setMeans(e.target.value) }} className='form-control' style={{ width: '30%', marginLeft: '35%' }} />
                <br />
                <button type="submit" className='btn btn-sm btn-success'>Add to To Do List</button>
            </form>
            <hr />
            <hr />
        </div>
    )
}
