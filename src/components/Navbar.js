import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top shadow">
                <div className="container-fluid">
                    {/* Navbar Brand (Logo) */}
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        className="navbar-brand"
                        onClick={closeNavbar}
                        style={{ cursor: "pointer" }}
                    >
                        Azad.Dev
                    </ScrollLink>

                    {/* Hamburger Menu */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    

                    {/* Navbar Links */}
                    <div
                        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                        id="navbarNav"
                    >
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-3">
                                <ScrollLink
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeNavbar}
                                    style={{ fontSize: "1.25rem", cursor: "pointer" }}
                                >
                                    Home
                                </ScrollLink>
                            </li>
                            <li className="nav-item px-3">
                                <ScrollLink
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeNavbar}
                                    style={{ fontSize: "1.25rem", cursor: "pointer" }}
                                >
                                    About
                                </ScrollLink>
                            </li>
                            <li className="nav-item px-3">
                                <ScrollLink
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeNavbar}
                                    style={{ fontSize: "1.25rem", cursor: "pointer" }}
                                >
                                    Services
                                </ScrollLink>
                            </li>
                            <li className="nav-item px-3">
                                <ScrollLink
                                    to="skills"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeNavbar}
                                    style={{ fontSize: "1.25rem", cursor: "pointer" }}
                                >
                                    Skills
                                </ScrollLink>
                            </li>
                            <li className="nav-item px-3">
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeNavbar}
                                    style={{ fontSize: "1.25rem", cursor: "pointer" }}
                                >
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>

                    {/* Hire Me Button */}
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="btn btn-outline-light d-none d-lg-block ml-auto"
                        onClick={closeNavbar}
                        style={{ cursor: "pointer" }}
                    >
                        Hire Me
                    </ScrollLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
