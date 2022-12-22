import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    let footerStyle = {
        color: 'bisque',
        textAlign: 'center',
        backgroundColor: 'brown',
        padding: 10,
        position: 'relative',
        width: '100%'
    }

    return (
        <footer style={footerStyle}>
            <div className="row">
                <div className="col-3" style={{ borderRight: "2px solid bisque" }}>
                    <Link to="/dashboard">
                        <button style={{ border: "0", backgroundColor: "transparent", color: "whitesmoke" }}>
                            <i className="bi-file-person-fill"></i> Dashboard</button>
                    </Link>
                </div>
                <div className="col-3" style={{ borderRight: "2px solid bisque" }}>
                    <Link to="/addUser">
                        <button style={{ border: "0", backgroundColor: "transparent", color: "whitesmoke" }}>
                            <i className="bi-plus-circle-fill"></i>  Add User</button>
                    </Link>
                </div>
                <div className="col-3" style={{ borderRight: "2px solid bisque" }}>
                    <Link className="nav-link active" aria-current="page" style={{ color: "whitesmoke" }} >
                        <button style={{ backgroundColor: "transparent", border: "0px", color: "whitesmoke" }} onClick={() => { props.deleteUserDatabase(props.userList) }}>
                            <i className="bi-eraser-fill"></i>Erase Database</button>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="/about">
                        <button style={{ border: "0", backgroundColor: "transparent", color: "whitesmoke" }}>
                            <i className="bi-info-circle-fill"></i>  About Us</button>
                    </Link>
                </div>
            </div>
            <hr />
            <div className="row">
                <p>Rights are reserved &copy; 2022 - Arnav Jain</p>
            </div>
        </footer>
    )
}
