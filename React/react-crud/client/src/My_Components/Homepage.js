import React from 'react'
import image from '../homepage.png'
import { Link } from 'react-router-dom'

export default function Homepage() {

    let btnStyle = {
        border: "0",
        borderRadius: "3px",
        padding: "7px",
        backgroundColor: "darkolivegreen",
        color: "bisque"
    }

    return (
        <div className="container text-center" style={{ marginBottom: "20vh" }}>
            <br />
            <div className="row">
                <h1 style={{ color: "darkred" }}>Welcome to ReactCRUD...</h1>
                <h6 style={{ color: "darkgreen" }}><em>Maintain user database here!</em></h6>
                <hr />
            </div>
            <div className="container">
                <img src={image} alt="" height={400} width={700} />
                <hr />
            </div>

            <div className="row">
                <div className="col-3" style={{marginLeft:"26%"}}>
                    <Link to="/addUser">
                        <button style={btnStyle}>
                            <i className="bi-plus-circle-fill"></i> Add User</button></Link>
                </div>
                <div className="col-3">
                    <Link to="/dashboard">
                        <button style={btnStyle}>
                            <i className="bi-file-person-fill"></i> View Dashboard</button></Link>
                </div>
            </div>

        </div>
    )
}
