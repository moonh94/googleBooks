import React from "react";
import {Link, NavLink} from "react-router-dom";

const NavBar =() => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="">Google Book Search</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <NavLink 
                            className="nav-link" 
                            activeClassName ="active"
                            isActive={() => window.location.pathname === "/"}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink 
                            className="nav-link" 
                            activeClassName ="active"
                            isActive={() => window.location.pathname === "/saved"}
                            to="/saved">
                           Saved Books
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;