import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top shadow">
                <div className="container-fluid">
                    {/* Navbar Brand (Logo) */}
                    <a className="navbar-brand" href="#home">Azad.Dev</a>

                    {/* Hamburger Menu */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">


                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#home" style={{ fontSize: '1.25rem' }}>Home</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#about" style={{ fontSize: '1.25rem' }}>About</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#services" style={{ fontSize: '1.25rem' }}>Services</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#skills" style={{ fontSize: '1.25rem' }}>Skills</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="#contact" style={{ fontSize: '1.25rem' }}>Contact</a>
                            </li>
                        </ul>



                    </div>

                    {/* Hire Me Button */}

                    <button className="btn btn-outline-light d-none d-lg-block ml-auto">
                        <a className="nav-link text-white" href="#contact">
                            Hire Me
                        </a>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
