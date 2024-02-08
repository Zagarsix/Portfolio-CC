import React from 'react';
import logoCC from "./media/logoDark.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    const handleClick = (url) => {
        window.open(url, '__blank', 'noopener,noreferrer');
    }
    return (
        <nav className="navbar fixed-top" style={{ background: "black" }}>
            <div className="container-fluid justify-content-between">
                <Link className="navbar-brand px-2 mx-1" to="/">
                    <img src={logoCC} alt="Zagarsix" width="180" height="50"></img>
                </Link>
                <div className="section">
                    <nav className="navbarFull px-3 mx-3" style={{ fontWeight: "bold", fontSize: "17px" }}>
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">Sobre mí</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Tools">Lenguajes y herramientas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Projects">Proyectos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="form-check form-switch px-2 mx-2">
                    <input className="form-check-input" type="checkbox" role="switch" id="DefaultNight" />
                    <label className="form-check-label" for="DefaultNight"><i class="fa-regular fa-moon fa-2xl"></i></label>
                    {/* <i className="fa-regular fa-sun"></i>                 */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
