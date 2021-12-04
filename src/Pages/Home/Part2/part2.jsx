import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Heart from '../../../Assets/Images/heart.png'
import Medic from '../../../Assets/Images/medic.png'
import Note from '../../../Assets/Images/note.png'
import { Card, CardH5, CardP, MainH1, MainP, RowMain } from './style'

export class part2 extends Component {
    render() {
        return (
            <Row>
                <RowMain>
                    <Col md={12}>
                        <Row>
                            <Col md={6} className='align-self-center'>
                                <MainH1>Keunggulan Pramu</MainH1>
                                <MainP>Memberikan pelayanan yang terbaik kepada pelanggan merupakan tugas utama Pramu dalam menjaga kebersihan serta kesehatan pelanggan</MainP>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={6}>
                                            <Card>
                                                <img src={Heart} alt="" />
                                                <CardH5>Jasa Kebersihan yang Murah</CardH5>
                                                <CardP>Pramu menyediakan jasa kebersihan terbaik dengan harga yang terjangkau bagi masyarakat</CardP>
                                            </Card>
                                            <Card>
                                                <img src={Medic} alt="" />
                                                <CardH5>Mengikuti Protokol Kesehatan</CardH5>
                                                <CardP>Dalam menjalankan kegiatan pembersihan, Pramu mengikuti protokol kesehatan guna memberika pelayanan terbaik bagi masyarakat</CardP>
                                            </Card>
                                            </Col>
                                            <Col md={6} className='align-self-center'>
                                            <Card>
                                                <img src={Note} alt="" />
                                                <CardH5>Pesan Dimana Saja dan Kapan Saja</CardH5>
                                                <CardP>Jasa kebersihan Pramu dapat dipesan dimana saja dan kapan saja. Nantinya Tim Kebersihan Pramu akan datang untuk membersihkan tempatmu</CardP>
                                            </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </RowMain>
            </Row>
        )
    }
}

export default part2
