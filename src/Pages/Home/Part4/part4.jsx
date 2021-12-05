import React, { Component } from 'react'
import ImgPeople from '../../../Assets/Images/landingPage2.png'
import { Row, Col } from 'react-bootstrap'
import { MainH1, MainP, RowMain } from './style'

export class part4 extends Component {
    render() {
        return (
            <Row>
                <RowMain>
                    <Col md={12}>
                        <Row>
                            <Col md={6} className='align-self-center'>
                                <MainH1>Ahli & Berpengalaman</MainH1>
                                <MainP>Para pekerja Pramu sudah sangat berpengalaman dalam hal kebersihan guna memberikan hasil terbaik dan higienis</MainP>
                            </Col>
                            <Col md={6}>
                                <img src={ ImgPeople } alt="" />
                            </Col>
                        </Row>
                    </Col>
                </RowMain>
            </Row>
        )
    }
}

export default part4
