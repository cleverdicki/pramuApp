import React, { Component } from 'react'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import { Base, Button, ButtonContainer, Card, CardContainer, CardInput, CardTitle, Dropdown, MainContainer, MainTitle } from './style'
import { Link } from 'react-router-dom'

export class registration extends Component {
    render() {
        return (
            <Base>
                <Header />
                <MainContainer>
                    <MainTitle>Form Pendaftaran</MainTitle>
                    <form action="">
                        <Card>
                            <CardContainer>
                                <CardTitle>Nama Lengkap</CardTitle><br />
                                <CardInput type={'text'} size={50} /><br />
                                <CardTitle>Jenis Kelamin</CardTitle><br />
                                <Dropdown>
                                    <option value={""}>-- Pilih Salah Satu --</option>
                                    <option value={"lakilaki"}>Laki-Laki</option>
                                    <option value={"perempuan"}>Perempuan</option>
                                </Dropdown><br />
                                <CardTitle>Nomor Telepon (Aktif WhatsApp)</CardTitle><br />
                                <CardInput size={50} /><br />
                                <CardTitle>Email</CardTitle><br />
                                <CardInput type={'email'} size={50} /><br />
                                <CardTitle>Alamat Domisili</CardTitle><br />
                                <Dropdown>
                                    <option value={""}>-- Pilih Salah Satu --</option>
                                    <option value={"bandung"}>Bandung</option>
                                    <option value={"bali"}>Bali</option>
                                    <option value={"jakpus"}>Jakarta Pusat</option>
                                    <option value={"kalsel"}>Kalimantan Selatan</option>
                                    <option value={"malang"}>Malang</option>
                                    <option value={"medan"}>Medan</option>
                                    <option value={"surabaya"}>Surabaya</option>
                                    <option value={"jayapura"}>Jayapura</option>
                                </Dropdown><br />
                            </CardContainer>
                        </Card>
                        <ButtonContainer>
                            <Link to="/thanks"><Button type='submit'>Daftar</Button></Link>
                        </ButtonContainer>
                    </form>
                </MainContainer>
                <Footer />
            </Base>
        )
    }
}

export default registration
