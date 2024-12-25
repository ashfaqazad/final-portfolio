import React from 'react';

const Navbar = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top shadow"
            // style={{backgroundColor: "#c778dd"}}
            >
                <div className="container-fluid">
                    {/* Navbar Brand (Logo) */}
                    <a className="navbar-brand" href="#home">Azad.Dev</a>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#footer">Footer</a>
                            </li> */}
                        </ul>
                    </div>

                    {/* Hire Me Button */}
                    <button className="btn btn-outline-light">Hire Me</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
