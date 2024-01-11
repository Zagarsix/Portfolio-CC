import React from 'react';
import logoCC from "./media/react.png"

function Navbar() {
    return (
        <nav class="navbar nav-underline">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logoCC} alt="Bootstrap" width="100" height="100"></img>
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
