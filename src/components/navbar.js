import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark">
            <div className="container-fluid" >
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Sobre mí
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="projects">
                                Proyectos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">
                                Herramientas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;