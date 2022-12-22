import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddUser(props) {

  // Initializing the state of the form fields to empty values
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("")

  const navigate = useNavigate(); // react hook used to navigate from AddUser to the Dashboard component upon form submit


  // On clicking Add User button
  const submit = (e) => {
    e.preventDefault(); // prevents loading of page 
    if (!name || !email || !password || !phone || !dob || !gender) {
      alert('One or more field is empty. Try again!')
    }
    else if (gender != 'Male' && gender != 'Female' && gender != 'NA') {
      alert('Gender field can only have Male/Female/NA as valid inputs. Try again!')
    }
    else {
      props.addUserData(name, email, password, phone, dob, gender) // call the addUserData function in apiCRUD.js
      alert("User added to database. Go to dashboard to view details")
      navigate('/dashboard')
    }
  }

  // CSS Styling for Add form
  let addFormStyle = {
    width: '30%', marginLeft: '35%', color: "olivedrab", backgroundColor: 'bisque'
  }

  return (
    <div className="container text-center">
      <br />
      <h1 style={{ color: "darkred" }}>Add User Data</h1>
      <br /><hr /><br />
      <form action="" onSubmit={submit} style={{ backgroundColor: "rgb(144,185,156)", borderRadius: "5px", border: "2px solid darkolivegreen", color: "darkred" }}>
        <br />
        <label htmlFor="name">Name - </label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Ex: John Doe" className='form-control' style={addFormStyle} />
        <label htmlFor="email">Email ID - </label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Ex: john.doe@email.com" className='form-control' style={addFormStyle} />
        <label htmlFor="password">Passowrd - </label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Ex: ********" className='form-control' style={addFormStyle} />
        <label htmlFor="phone">Phone No. - </label>
        <input type="text" name="phone" id="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Ex: 1234567890" className='form-control' style={addFormStyle} />
        <label htmlFor="dob">Date of Birth - </label>
        <input type="date" name="dob" id="dob" value={dob} onChange={(e) => { setDob(e.target.value) }} className='form-control' style={addFormStyle} />
        <label htmlFor="gender">Gender - </label>
        <input type="text" name="gender" id="gender" value={gender} onChange={(e) => { setGender(e.target.value) }} placeholder="Ex: Male/Female/NA" className='form-control' style={addFormStyle} />
        <br />
        <button type="submit" className='btn btn-sm btn-success'>Add User</button>

        <br /><br />
      </form>
      <br />
    </div>
  )
}
