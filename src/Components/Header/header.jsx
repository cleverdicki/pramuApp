import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavColor, ButtonTemplate } from './style'
import { Link } from 'react-router-dom'

export class header extends Component {
    render() {
        return (
            <Container className='header-page'>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand><NavColor>Pramu</NavColor></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><Link to="/"><NavColor>Home</NavColor></Link></Nav.Link>
                        <Nav.Link><Link to="/pricing"><NavColor>Pricing</NavColor></Link></Nav.Link>
                        <Nav.Link><Link to="/contact"><NavColor>Contact</NavColor></Link></Nav.Link>
                        <Nav.Link><Link to="/join-us"><NavColor>Join Us</NavColor></Link></Nav.Link>
                    </Nav>
                    <Link to="/order"><ButtonTemplate>Order Now <FontAwesomeIcon icon={faArrowRight} /></ButtonTemplate></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
        )
    }
}

export default header
