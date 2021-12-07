import React, { Component } from 'react'
import Header from '../../../Components/Header/header'
import Footer from '../../../Components/Footer/footer'
import PackageAntar from '../../../Assets/Gif/package-antar.gif'
import { Base, Button, Card, CardContainer, CardDetail, CardDetailContainer, CardTitle, CardTitleChildBarang, Image, MainContainer, MainDetail, MainTitle } from '../style'
import { Container, Col, Row } from 'react-bootstrap'

export class packageAntar extends Component {
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
                                        <Image src={ PackageAntar } />
                                    </Col>
                                    <Col md={4}>
                                        <Card>
                                            <CardTitle>Isi Angkat Barang</CardTitle>
                                            <CardDetailContainer>
                                                <CardTitleChildBarang>Jasa Antar Barang Motor (Rp 9.000 / 1 Km)</CardTitleChildBarang>
                                                <CardDetail>Layanan antar barang menggunakan kendaraan bermotor</CardDetail>
                                            </CardDetailContainer>
                                            <CardDetailContainer>
                                                <CardTitleChildBarang>Jasa Antar Barang Pick Up (Rp 20.000 / 1 Km)</CardTitleChildBarang>
                                                <CardDetail>Layanan antar barang menggunakan kendaraan mobil jenis pick up</CardDetail>
                                            </CardDetailContainer>
                                            <CardDetailContainer>
                                                <CardTitleChildBarang>Jasa Antar Barang Box (Rp 30.000 / 1 Km)</CardTitleChildBarang>
                                                <CardDetail>Layanan antar barang menggunakan kendaraan mobil jenis box</CardDetail>
                                            </CardDetailContainer>
                                            <Button>Order Now</Button>
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

export default packageAntar
