import React from 'react';
import logoCC from "./media/logoDark.png"

function Navbar() {
    return (
        <nav class="navbar fixed-top" style={{ background: "black" }}>
            <div class="container-fluid justify-content-between">
                <a class="navbar-brand" href="/">
                    <img src={logoCC} alt="Zagarsix" width="270" height="100"></img>
                </a>
                <div class="section" style={{background:"green"}}>
                <nav class="navbar px-5 mx-5" style={{background:"pink"}}>
                    <ul class="nav nav-underline">
                        <li class="nav-item">
                            <a class="nav-link" href="/Introduction">Introducción</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Habilidades</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Lenguajes y herramientas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Proyectos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contáctame</a>
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

export default Navbar
