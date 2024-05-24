import React, { useState } from 'react';
import logoCC from "./media/logoDark.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return <>
        <main className="flex-shrink-0">
            {/*Navigation*/}
            <nav className="navbar navbar-expand-lg" style={{ background: "black" }}>
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand px-2 mx-1" to="/" onClick={() => setIsNavCollapsed(true)}>
                        <img src={logoCC} alt="Zagarsix" width="180" height="50" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded={!isNavCollapsed}
                        aria-label="Toggle navigation"
                        style={{ background: "#00ac00" }}
                        onClick={handleNavCollapse}
                    >
                        {isNavCollapsed ? (
                            <>
                                <i className="fas fa-bars" />
                            </>
                        ) : (
                            <>
                                <i className="fas fa-times" />
                            </>
                        )}
                    </button>
                    <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : 'show'} px-3 mx-3`} id="navbarResponsive" style={{ fontWeight: "bold", fontSize: "17px" }}>
                        {/* <nav className="navbarFull px-3 mx-3" style={{ fontWeight: "bold", fontSize: "17px" }}> */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/About" onClick={() => setIsNavCollapsed(true)}>Sobre mí</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Tools" onClick={() => setIsNavCollapsed(true)}>Lenguajes y herramientas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Projects" onClick={() => setIsNavCollapsed(true)}>Proyectos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact" onClick={() => setIsNavCollapsed(true)}>Contacto</Link>
                            </li>
                        </ul>
                        {/* </nav> */}
                    </div>
                    {/* <div className="form-check form-switch px-2 mx-2"> */}
                    {/* <input className="form-check-input" type="checkbox" role="switch" id="DefaultNight" />
                    <label className="form-check-label" htmlFor="DefaultNight"><i className="fa-regular fa-moon fa-2xl"></i></label> */}
                    {/* <i className="fa-regular fa-sun"></i>                 */}
                    {/* </div> */}
                </div>
            </nav>
        </main>
    </>
}

export default Navbar;
