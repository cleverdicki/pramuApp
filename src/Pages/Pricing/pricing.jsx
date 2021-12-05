import React, { Component } from 'react'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import Img1 from '../../Assets/Images/bersih-opt.png'
import Img2 from '../../Assets/Images/antar-opt.png'
import Img3 from '../../Assets/Images/lengkap-opt.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Base, Button, Card, CardContainer, CardDetail, CardTitle, CardSold, FlexContainer, Image, MainComponent, MainDetail, MainTitle } from './style'
import { Container } from 'react-bootstrap'

export class pricing extends Component {
    render() {
        return (
            <Base>
                <Header />
                <Container>
                    <MainComponent>
                        <MainTitle>Layanan Pramu</MainTitle>
                        <MainDetail>Pramu memberikan beberapa layanan yang dapat dipesan untuk melakukan kebersihan dan juga kepengurusan barang yang berkaitan</MainDetail>
                    </MainComponent>
                    <FlexContainer>
                        <Card>
                            <Image src={ Img1 } alt="" />
                            <CardContainer>
                                <CardTitle>Bersih</CardTitle>
                                <CardDetail>Pramu memberikan pelayanan kebersihan dengan memperhatikan protokol kesehatan serta hasil yang maksimal</CardDetail>
                                <CardSold><FontAwesomeIcon icon={ faShoppingBasket } /> 323 Jual</CardSold>
                                <Button>Learn More</Button>
                            </CardContainer>
                        </Card>
                        <Card>
                            <Image src={ Img2 } alt="" />
                            <CardContainer>
                                <CardTitle>Antar Barang</CardTitle>
                                <CardDetail>Pramu menyediakan jasa pengiriman barang yang terjangkau serta menjamin keamanan barang dalam perjalanannya</CardDetail>
                                <CardSold><FontAwesomeIcon icon={ faShoppingBasket } /> 147 Jual</CardSold>
                                <Button>Learn More</Button>
                            </CardContainer>
                        </Card>
                        <Card>
                            <Image src={ Img3 } alt="" />
                            <CardContainer>
                                <CardTitle>Paket Lengkap</CardTitle>
                                <CardDetail>Pramu menyediakan paket lengkap yang mencakup keseluruhan paket yang disediakan oleh Pramu</CardDetail>
                                <CardSold><FontAwesomeIcon icon={ faShoppingBasket } /> 155 Jual</CardSold>
                                <Button>Learn More</Button>
                            </CardContainer>
                        </Card>
                    </FlexContainer>
                </Container>
                <Footer />
            </Base>
        )
    }
}

export default pricing
