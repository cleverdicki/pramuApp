import React, { Component } from 'react'
import Header from '../../../Components/Header/header'
import Footer from '../../../Components/Footer/footer'
import PackageLengkap from '../../../Assets/Gif/package-lengkap.gif'
import { Base, ButtonChild, Card, CardContainer, CardDetail, CardDetailContainer, CardTitle, CardTitleChildBarang, Image, MainContainer, MainDetail, MainTitle } from '../style'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class packageLengkap extends Component {
    render() {
        return (
            <Base>
                <Header />
                <MainContainer>
                    <Container>
                        <MainTitle>Paket Antar Barang</MainTitle>
                        <MainDetail>Pramu menyediakan jasa angkut barang dengan harga yang terjangkau serta keamanan pengiriman barang yang maksimal, pengantaran barang dapat dilakukan via motor, mobil box, ataupun mobil pick up</MainDetail>
                    </Container>
                </MainContainer>
                <CardContainer>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col md={8}>
                                        <Image src={ PackageLengkap } />
                                    </Col>
                                    <Col md={4}>
                                        <Card>
                                            <CardTitle>Isi Paket Lengkap</CardTitle>
                                            <CardDetailContainer>
                                                <CardTitleChildBarang>Paket Bersih (Rp 300.000)</CardTitleChildBarang>
                                                <CardDetail>Paket Bersih Pramu</CardDetail>
                                            </CardDetailContainer>
                                            <CardDetailContainer>
                                                <CardTitleChildBarang>Paket Antar Barang (Rp 20.000 / 1 Km)</CardTitleChildBarang>
                                                <CardDetail>Paket Antar Barang menggunakan kendaraan mobil Pick Up</CardDetail>
                                            </CardDetailContainer>
                                            <Link to="/order"><ButtonChild>Order Now</ButtonChild></Link>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>    
                    </Container>                    
                </CardContainer>
                <Footer />
            </Base>
        )
    }
}

export default packageLengkap
