import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import LogoImage from '../assets/images/logo_high_resolution_white.png';
import "./style.css";
import { Link, animateScroll as scroll } from "react-scroll";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MyNavBar() {
    const [expanded, setExpanded] = useState(false);

    function scrollToTop() {
        scroll.scrollToTop();
    };

    return (
        <Navbar variant='dark' style={{ backgroundColor: "#212121" }} expand="lg" className='header' expanded={expanded}>
            <Navbar.Brand className='navbar-brand' href="/">
                <img src={LogoImage} alt="beyondLogo" className="logoImage" onClick={scrollToTop} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-item">
                    <Link
                        className="nav-link"
                        href='/aboutUs'
                        activeClass="active"
                        to="aboutUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setExpanded(false)}
                    >ABOUT US</Link>
                    <Link
                        className="nav-link"
                        href='/services'
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setExpanded(false)}
                    >SERVICES</Link>
                    <Link
                        className="nav-link"
                        href='/contact'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setExpanded(false)}
                    >CONTACT</Link>
                    <Link
                        className="nav-link"
                        href='/clientLogin'
                        activeClass="active"
                        to="clientLogin"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setExpanded(false)}
                    >CLIENT LOGIN</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavBar;
