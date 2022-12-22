import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditUser(props) {

  // set inital state of formdata with the userdata of individual user passed from the UserData.js component
  const [name, setName] = useState(props.edituser.name)
  const [email, setEmail] = useState(props.edituser.email)
  const [password, setPassword] = useState(props.edituser.password)
  const [phone, setPhone] = useState(props.edituser.phone)
  const [dob, setDob] = useState(props.edituser.dob)
  const [gender, setGender] = useState(props.edituser.gender)
  const [id, setId] = useState(props.edituser._id)

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault(); // prevents page reloading
    if (!name || !email || !password || !phone || !dob || !gender) { // if any of the form field values is empty give an alert
      alert('Cannot update a User to the database')
    }
    else {
      props.updateUserData(id, name, email, password, phone, dob, gender) // call updateUserData function in apiCRUD.js file
      alert("User updated to database!")
      // window.location.reload();
      navigate('/dashboard')
    }
  }

  // CSS Styling of Edit form
  let editFormStyle = {
    width: '30%', marginLeft: '35%', color: "olivedrab", backgroundColor: 'bisque'
  }

  return (
    <div className="container text-center">
      <h5 style={{ color: "darkred" }}>Edit {props.edituser.name}'s data</h5>
      <form action="" onSubmit={submit} style={{ border: "2px solid darkblue", color: "darkred", borderRadius: "5px" }}>
        <br />
        <label htmlFor="name">Name - </label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} className='form-control' style={editFormStyle} />
        <label htmlFor="email">Email ID - </label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='form-control' style={editFormStyle} />
        <label htmlFor="password">Passowrd - </label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className='form-control' style={editFormStyle} />
        <label htmlFor="phone">Phone No. - </label>
        <input type="text" name="phone" id="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} className='form-control' style={editFormStyle} />
        <label htmlFor="dob">Date of Birth - </label>
        <input type="date" name="dob" id="dob" value={dob} onChange={(e) => { setDob(e.target.value) }} className='form-control' style={editFormStyle} />
        <label htmlFor="gender">Gender - </label>
        <input type="text" name="gender" id="gender" value={gender} onChange={(e) => { setGender(e.target.value) }} className='form-control' style={editFormStyle} />
        <br />
        <button type="submit" className='btn btn-sm btn-success'>Edit User</button>

        <br /><br />
      </form>
      <br />
    </div>
  )
}
