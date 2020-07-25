import React, { Component } from 'react';
import "./style.css";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <div className='header'>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand navName" href='/'>DHANI POZNIAK</a>

                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${classOne}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html"><i className="fab fa fa-home"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/pozengineer" rel='noopener noreferrer' target='_blank'><i className="fab fa fa-github"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://linkedin.com/in/dhani-pozniak-34801a196" rel='noopener noreferrer' target='_blank'><i className="fab fa fa-linkedin-square"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="projects.html">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;