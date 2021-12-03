import React, { Component } from 'react'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import MainPeople from '../../Assets/Images/landingPage.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Base, ButtonTemplate, ColLeftMain, ColRightMain, MainH1, MainH5, MainP, RowMain } from './style'

export class home extends Component {
    render() {
        return (
            <Base>
                <Header />
                <Container>
                    <Row>
                        <RowMain>
                            <Col md={12}>
                                <Row>
                                    <Col md={6} className='align-self-center'>
                                        <ColLeftMain>
                                            <MainH5>Halo Pejuang Kebersihan</MainH5>
                                            <MainH1>Perkenalkan Jasa Pembersih Terbaik</MainH1>
                                            <MainP>Kami menawarkan jasa kebersihan dengan harga terjangkau dan kualitas pelayanan Bintang 5</MainP>
                                            <ButtonTemplate>Order Now</ButtonTemplate>
                                        </ColLeftMain>
                                    </Col>
                                    <Col md={6}>
                                        <ColRightMain>
                                            <img src={ MainPeople } alt=""/>
                                        </ColRightMain>
                                    </Col>
                                </Row>
                            </Col>
                        </RowMain>
                    </Row>
                </Container>
                <Footer className='fixed-bottom' />
            </Base>
        )
    }
}

export default home
