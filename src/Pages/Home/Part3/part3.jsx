import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MainH1, MainP, RowMain } from './style'
import ImgPage from '../../../Assets/Images/landingPage1.png'

export class part3 extends Component {
    render() {
        return (
            <Row>
                <RowMain>
                    <Container>
                        <Col md={12}>
                            <Row>
                                <Col md={6}>
                                    <img src={ImgPage} alt="" />
                                </Col>
                                <Col md={6} className='align-self-center'>
                                    <MainH1>Kegiatan Pramu</MainH1>
                                    <MainP>Membersihkan ruangan yang menjadi tempat tinggal merupakan suatu tanggung jawab Pramu agar memberikan tempat tinggal yang nyaman serta bebas dari kuman</MainP>
                                </Col>
                            </Row>
                        </Col>
                    </Container>
                </RowMain>
            </Row>
        )
    }
}

export default part3
