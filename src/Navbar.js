import React from 'react';
import logoCC from "./media/logoDark.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    // const handleClick = (url) => {
    //     window.open(url, '__blank', 'noopener,noreferrer');
    // }
    return <>
        <main className="flex-shrink-0">
            {/*Navigation*/}
            <nav className="navbar navbar-expand-lg" style={{ background: "black" }}>
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand px-2 mx-1" to="/">
                        <img src={logoCC} alt="Zagarsix" width="180" height="50"></img>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ background: "#00ac00" }}
                    >
                        Menú &ensp; <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse px-3 mx-3" id="navbarResponsive" style={{ fontWeight: "bold", fontSize: "17px" }}>
                        {/* <nav className="navbarFull px-3 mx-3" style={{ fontWeight: "bold", fontSize: "17px" }}> */}
                        <ul className="nav nav-underline ms-auto">
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
