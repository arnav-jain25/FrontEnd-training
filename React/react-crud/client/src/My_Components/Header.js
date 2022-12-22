import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

    let headerStyle = {
        backgroundColor: "brown"
    }

    return (
        <nav className="navbar navbar-expand-lg" style={headerStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: "bisque" }}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/dashboard" style={{ color: "whitesmoke" }}>
                                <i className="bi-file-person-fill"></i>  Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addUser" style={{ color: "whitesmoke" }}>
                                <i className="bi-plus-circle-fill"></i>  Add User</Link>
                        </li>
                    </ul>


                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" style={{color:"whitesmoke"}} >
                                <i className="bi-eraser-fill"></i><button style={{backgroundColor:"transparent", border:"0px", color:"whitesmoke"}} onClick={() => { props.deleteUserDatabase(props.userList) }}>Erase Database</button>  </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active" aria-current="page" style={{ color: "whitesmoke" }}>
                                <i className="bi-info-circle-fill"></i>  About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
