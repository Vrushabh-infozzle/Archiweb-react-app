// src/components/Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <article className="archiWeb-Css">ArchiWeb</article>
            <button className="navbar-toggler mt-2 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse border-inital row" id="collapsibleNavbar">
                <section className="col-md-5"></section>
                <ul className="navbar-nav col-md-7">
                    <li className="nav-item active activeLink me-5">
                        <a className="nav-link text-dark" href="javascript:void(0)">Home</a>
                    </li>
                    <li className="nav-item active activeLink me-5">
                        <a className="nav-link text-dark" href="#Our-project">Project</a>
                    </li>
                    <li className="nav-item active activeLink me-5">
                        <a className="nav-link text-dark" href="#About-us">About</a>
                    </li>
                    <li className="nav-item active activeLink">
                        <a className="nav-link text-dark" href="#contact-us">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
