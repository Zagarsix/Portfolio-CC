import React from 'react';
import logoCC from "./media/logoDark.png"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top" style={{ background: "black"}}>
            <div className="container-fluid justify-content-between">
                <Link className="navbar-brand px-2 mx-1" to="/">
                    <img src={logoCC} alt="Zagarsix" width="200" height="70"></img>
                </Link>
                <div className="section">
                <nav className="navbarFull px-5 mx-5" style={{fontWeight:"bold", fontSize:"20px"}}>
                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">Sobre mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/PreSkills">Prehabilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Tools">Lenguajes y herramientas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Projects">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Interests">Intereses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contacto</Link>
                        </li>
                    </ul>
                </nav>
                </div>
                <div>
                    <p>Hola Mundo</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
