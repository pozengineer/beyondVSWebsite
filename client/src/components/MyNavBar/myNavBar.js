import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import LogoImage from '../assets/images/logo_high_resolution_white.png';
import "./style.css";
import { Link, animateScroll as scroll } from "react-scroll";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class MyNavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navExpanded: false
        }

        this.setNavExpanded = this.setNavExpanded.bind(this);
        this.closeNavBar = this.closeNavBar.bind(this);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    setNavExpanded = (expanded) => {
        this.setState({
            navExpanded: expanded
        });
    };

    closeNavBar = () => {
        this.setState({
            navExpanded: false
        });
    };

    render() {
        return (
            <Navbar variant='dark' style={{ backgroundColor: "#212121" }} expand="lg" className='header' onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
                <Navbar.Brand className='navbar-brand' href="/">
                    <img src={ LogoImage } alt="beyondLogo" className="logoImage" onClick={this.scrollToTop} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                            onClick={this.closeNavBar}
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
                            onClick={this.closeNavBar}
                        >SERVICES</Link>
                        <Link
                            className="nav-link"
                            href='/contact'
                            activeClass="active"
                            to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={this.closeNavBar}
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
                            onClick={this.closeNavBar}
                        >CLIENT LOGIN</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNavBar;
