import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavColor, ButtonTemplate } from './style'

export class header extends Component {
    render() {
        return (
            <Container className='header-page'>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><NavColor>Pramu</NavColor></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1"><NavColor>Home</NavColor></Nav.Link>
                        <Nav.Link href="#action2"><NavColor>Pricing</NavColor></Nav.Link>
                        <Nav.Link href="#action2"><NavColor>Contact</NavColor></Nav.Link>
                        <Nav.Link href="#action2"><NavColor>Join Us</NavColor></Nav.Link>
                    </Nav>
                    <ButtonTemplate>Order Now <FontAwesomeIcon icon={faArrowRight} /></ButtonTemplate>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
        )
    }
}

export default header
