import React from 'react'
import UserData from './UserData'

export default function Dashboard(props) {
  return (
    <div className="container text-center" style={{ marginBottom: "40vh" }}>
      <br />
      <div className="row">
        <h1 style={{ color: "darkred" }}>My Dashboard</h1>
      </div>
      <br /><hr /><br />
      <div className="container">
        {props.userList.length === 0 ? <h2 className='text-center'>No Data to display</h2> : /* call the map function to loop through each userdata in userList */
          props.userList.map((userdata, id) => {
            return ( // pass data to UserData component
              <UserData userdata={userdata} key={id} deleteUserData={props.deleteUserData} updateUserData={props.updateUserData} />
            )
          })
        }
      </div>
    </div>
  )
}
