import React from 'react';
import logoCC from "./media/logoDark.png"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top" style={{ background: "black" }}>
            <div className="container-fluid justify-content-between">
                <Link className="navbar-brand" to="/">
                    <img src={logoCC} alt="Zagarsix" width="270" height="100"></img>
                </Link>
                <div className="section">
                <nav className="navbar px-5 mx-5" style={{color:"#1980e0", fontSize:"20px"}}>
                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Introduction">Introducción</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/PreSkills">Prehabilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Skills">Lenguajes y herramientas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Projects">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Interests">Intereses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contáctame</Link>
                        </li>
                    </ul>
                </nav>
                </div>
                <div style={{background:"green"}}>
                    <p>Hola Mundo</p>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
