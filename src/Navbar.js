import React from 'react';
import logoCC from "./media/logoDark.png"

function Navbar() {
    return (
        <nav class="navbar nav-underline fixed-top" style={{background:"black"}}>
            <div class="container-fluid justify-content-betweeen" style={{background:"black"}}>
                <a class="navbar-brand" href="#">
                    <img src={logoCC} alt="Bootstrap" width="270" height="100"></img>
                </a>
                <ul class="nav nav-underline justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" href="/Introduction">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Disabled</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
