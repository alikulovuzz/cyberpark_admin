import { Link } from "react-router-dom";
import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                bezKoder
            </Link>

            <div className="navbar-nav mr-auto">

                <li className="nav-item">
                    <Link to="mod" className="nav-link">
                        Moderator
                    </Link>
                </li>


                <li className="nav-item">
                    <Link to="admin" className="nav-link">
                        Admin
                    </Link>
                </li>


                <li className="nav-item">
                    <Link to="user" className="nav-link">
                        User
                    </Link>
                </li>

            </div>

            <div className="navbar-nav ml-auto">

                <li className="nav-item">
                    <Link to="login" className="nav-link">
                        Login
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="register" className="nav-link">
                        Sign Up
                    </Link>
                </li>

            </div>
        </nav>
    )
}
