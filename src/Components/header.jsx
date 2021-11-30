import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button } from 'react-bootstrap'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function header() {
    return (
        <Container>
            <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Pramu</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Pricing</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                    <Nav.Link href="#action2">Join Us</Nav.Link>
                </Nav>
                <Button>Order Now <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Container>
    )
}

export default header
