import React, { Component } from 'react'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import { Base, Detail, MainContainer, Title } from './style'

export class thanks extends Component {
    render() {
        return (
            <Base>
                <Header />
                <MainContainer>
                    <Title>Terima Kasih!</Title>
                    <Detail>Silahkan cek Email Anda untuk proses selanjutnya</Detail>
                </MainContainer>
                <Footer />
            </Base>
        )
    }
}

export default thanks
