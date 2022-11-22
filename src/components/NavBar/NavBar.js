import React from 'react';
import {NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='bg-opacity-75'>
            <Container fluid>   
                <NavLink to='/'><img className='ms-lg-5 img-fluid' src="favicon.png" alt="" /></NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto text-start">
                        <NavLink to='/topics'>Topics</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/blog'>Blog</NavLink> 
                    </Nav>
                    <button className='btn btn-outline-light me-lg-5 ms-3 mt-2 text-start'>About</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    );
};

export default NavBar;