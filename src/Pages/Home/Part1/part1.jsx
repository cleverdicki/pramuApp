import React, { Component } from 'react'
import ImgPeople from '../../../Assets/Images/landingPage.png'
import { Row, Col } from 'react-bootstrap'
import { ButtonTemplate, ColLeftMain, ColRightMain, MainTitleH1, MainTitleH5, MainTitleP, RowMain } from './style'

export class part1 extends Component {
    render() {
        return (
            <Row>
                <RowMain>
                    <Col md={12}>
                        <Row>
                            <Col md={6} className='align-self-center'>
                                <ColLeftMain>
                                    <MainTitleH5>Halo Pejuang Kebersihan</MainTitleH5>
                                    <MainTitleH1>Perkenalkan Jasa Pembersih Terbaik</MainTitleH1>
                                    <MainTitleP>Kami menawarkan jasa kebersihan dengan harga terjangkau dan kualitas pelayanan Bintang 5</MainTitleP>
                                    <ButtonTemplate>Order Now</ButtonTemplate>
                                </ColLeftMain>
                            </Col>
                            <Col md={6}>
                                <ColRightMain>
                                    <img src={ ImgPeople } alt=""/>
                                </ColRightMain>
                            </Col>
                        </Row>
                    </Col>
                </RowMain>
            </Row>
        )
    }
}

export default part1
