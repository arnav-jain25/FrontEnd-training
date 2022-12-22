import React from 'react'
import EditUser from './EditUser'
// import { Routes, Route, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function UserData(props) {

    // const navigate = useNavigate(); // react hook
    // const toEditUser = () => { // to navigate to the editUser address
    //     console.log("testing navigate");
    //     navigate('/dashboard/editUser')
    // }

    return (
        <>
            <div style={{backgroundColor: "rgb(144,185,156)", borderRadius:"5px", border:"2px solid darkolivegreen"}}>
                <hr />
                <div className="container-fluid mt-4" style={{ paddingLeft: "35px%" }}>
                    <div className="row justify-content-center">
                        <div className="col-auto mb-3">
                            <div className="card " style={{ width: "66.5rem", boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.4)" }}>
                                <div className="card-body" style={{ backgroundColor: "darkolivegreen", border: "0px solid darkred", borderRadius: "5px" }}>
                                    <h4 className="card-title" style={{ color: "wheat" }}>{props.userdata.name}</h4><br />
                                    <ul style={{ textAlign: "left" }}>
                                        <li style={{ color: "beige" }}>Email ID - {props.userdata.email}</li>
                                        <li style={{ color: "beige" }}>Password - {props.userdata.password}</li>
                                        <li style={{ color: "beige" }}>Phone No. - {props.userdata.phone}</li>
                                        <li style={{ color: "beige" }}>Date of Birth - {props.userdata.dob}</li>
                                        <li style={{ color: "beige" }}>Gender - {props.userdata.gender}</li><br />
                                        <button className="btn btn-sm btn-danger" onClick={() => { props.deleteUserData(props.userdata) }} >Delete</button>
                                        {/* <button className="btn btn-sm btn-success" style={{ marginLeft: "5%", paddingLeft: "6%", paddingRight: "6%" }} onClick={() => { toEditUser() }} >Edit</button> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <EditUser edituser={props.userdata} updateUserData={props.updateUserData} />
            </div>
            <br />
            {/* <Routes>
                <Route exact path='/dashboard/editUser' element={   
                    <EditUser edituser={props.userdata} key={props.userdata._id} updateUserData={props.updateUserData} />}>
                </Route>
            </Routes> */}

            {/* <Outlet /> */}

        </>
    )
}
