import * as React from 'react'
import { Link  } from 'gatsby'
import {  Nav, Navbar} from 'react-bootstrap';

import darkthglogo from '../assets/images/darkthglogo.svg'
import Header from '../styles/header.module.scss'


const header = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Link to='/'>
                <img className={`${Header.logo} ${Header.logoMobile}`} src={darkthglogo} alt="darkthglogo" />
            </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            
        <div className="row align-items-center justify-content-lg-between justify-content-md-start py-4 position-relative">
            <Link to='/'>
                <img className={Header.logo} src={darkthglogo} alt="darkthglogo" />
            </Link>
            <Nav  activeKey="/home">
                <Nav.Item className="px-3 py-lg-0 py-md-1 py-sm-4">
                    <Link to="/">Home</Link>
                </Nav.Item>
                <Nav.Item className="px-3 py-lg-0 py-md-1 py-sm-4">
                <Link to="/portfolio">Portfolio</Link>
                </Nav.Item>
                <Nav.Item className="px-3 py-lg-0 py-md-1 py-sm-4">
                    <Link to="/blog">Blog</Link>
                </Nav.Item>
                <Nav.Item className="px-3 py-lg-0 py-md-1 py-sm-4">
                    <Link to="/contact">Contact</Link>
                </Nav.Item>
            </Nav>
        </div>
        </Navbar.Collapse>
        </Navbar>
    );
};




export default header;
