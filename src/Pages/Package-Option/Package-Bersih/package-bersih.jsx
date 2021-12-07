import React, { Component } from 'react'
import Header from '../../../Components/Header/header'
import Footer from '../../../Components/Footer/footer'
import PackageBersih from '../../../Assets/Gif/package-bersih.gif'
import { Base, Button, Card, CardContainer, CardDetail, CardDetailContainer, CardTitle, CardTitleChild, Image, MainContainer, MainDetail, MainTitle } from '../style'
import { Container, Col, Row } from 'react-bootstrap'

export class packageBersih extends Component {
    render() {
        return (
            <Base>
                <Header />
                <MainContainer>
                    <Container>
                        <MainTitle>Paket Bersih</MainTitle>
                        <MainDetail>Pramu memberikan pelayanan kebersihan yang menyeluruh serta memperhatikan protokol kesehatan dalam menjalankan pembersihan yang nantinya dilakukan secara maksimal agar hasil yang diperoleh dapat membuat konsumen nyaman serta tidak khawatir akan kesehatan serta kebersihan di tempat tinggalnya</MainDetail>
                    </Container>
                </MainContainer>
                <CardContainer>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col md={8}>
                                        <Image src={ PackageBersih } />
                                    </Col>
                                    <Col md={4}>
                                        <Card>
                                            <CardTitle>Isi Paket Bersih</CardTitle>
                                            <CardDetailContainer>
                                                <CardTitleChild>Jasa Bersih Rumah (Rp 100.000)</CardTitleChild>
                                                <CardDetail>Layanan pembersihan kosan atau rumah profesional yang meliputi mengelap debu, mengepel lantai, merapihkan kamar tidur dan membersihkan kamar mandi</CardDetail>
                                            </CardDetailContainer>
                                            <CardDetailContainer>
                                                <CardTitleChild>Jasa Fogging Disinfektar (Rp 150.000)</CardTitleChild>
                                                <CardDetail>Penyemprotan ruangan dengan cairan sterilisasi untuk membunuh kuman dan bakteri</CardDetail>
                                            </CardDetailContainer>
                                            <CardDetailContainer>
                                                <CardTitleChild>Jasa Cuci Ac (Rp 50.000)</CardTitleChild>
                                                <CardDetail>Layanan yang meliputi cuci AC, tambah dan isi freon terbaik untuk jenis AC split dan inverter</CardDetail>
                                            </CardDetailContainer>
                                            <CardTitleChild>Total Harga = Rp 300.000</CardTitleChild>
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

export default packageBersih
