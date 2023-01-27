import React, {Component} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from './Vector.png'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Header.css'

import Home from '../pages/Home'
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';
import Video from '../pages/Video';

export default class Header extends Component {
    render () {
        return (
            <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg = "light" variant = "light">
                <Container>
                    <Navbar.Brand href = "/">
                        <img 
                        src = {logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt = "Logo"
                        />Vektor
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id = "responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link href="/">Dom</Nav.Link>
                            <Nav.Link href="/about">O nas</Nav.Link>
                            <Nav.Link href="/contacts">Kontakty</Nav.Link>
                            <Nav.Link href="/blog">Nasz Blog</Nav.Link>
                            <Nav.Link href="/video">Video</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route exact path = "/" element = {<Home />} />
                    <Route exact path = "/about" element = {<About />} />
                    <Route exact path = "/contacts" element = {<Contacts />} />
                    <Route exact path = "/blog" element = {<Blog />} />
                    <Route exact path = "/video" element = {<Video/>} />
                </Routes>
            </Router>
       </>
       )

    }
  
}