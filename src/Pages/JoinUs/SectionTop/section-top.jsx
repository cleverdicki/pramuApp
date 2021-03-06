import React, { Component } from 'react'
import { Button, ColumnContainer, MainDetail, MainTitle } from './style'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class sectionTop extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Row>
                            <ColumnContainer>
                                <Col md={6} className='align-self-center'>
                                    <MainTitle>Bantu jutaan pengguna Pramu dalam kegiatan sehari-harinya</MainTitle>
                                    <MainDetail>Banyak partner Pramu yang sudak meningkatkan pendapatan mereka dengan Pramu. Sekarang giliranmu!</MainDetail>
                                    <Link to="/registration"><Button>Join Now</Button></Link>
                                </Col>
                            </ColumnContainer>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default sectionTop
