import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import * as ReactBootStrap from "react-bootstrap";

const Navbar = (props) => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

        return (
            <ReactBootStrap.Navbar
                className="section-main"
                sticky="top"
                collapseOnSelect expand="lg" bg="dark">
                <ReactBootStrap.Navbar.Brand href="#home">AREKAREKAREK</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="ml-auto">
                        <ReactBootStrap.Nav.Link >
                            <Link
                                                activeClass="active"
                                                to="section1"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                 About
                            </Link>
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link >
                            <Link
                                                activeClass="active"
                                                to="section2"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                Projects
                             </Link>
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link >
                            <Link
                                                activeClass="active"
                                                to="section3"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                Contact
                            </Link>
                        </ReactBootStrap.Nav.Link>

                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        );
}

export default Navbar
