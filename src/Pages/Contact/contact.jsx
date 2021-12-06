import React, { Component } from 'react'
import Img from '../../Assets/Images/contact-map.png'
import ImgPhone from '../../Assets/Images/phone.png'
import ImgWhatsApp from '../../Assets/Images/whatsapp.png'
import ImgEmail from '../../Assets/Images/email.png'
import ImgLocation from '../../Assets/Images/location.png'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import { Container } from 'react-bootstrap'
import { Base, FlexContainer, FooterSection, FooterCard, FooterCardDetail, FooterCardImage, FooterCardTitle, FooterTitle, Image } from './style'

export class contact extends Component {
    render() {
        return (
            <Base>
                <Header />
                <Image src={ Img } alt="" />
                <FooterSection>
                    <FooterTitle>Kontak</FooterTitle>
                    <Container>
                        <FlexContainer>
                            <FooterCard>
                                <FooterCardTitle>Nomor Telepon</FooterCardTitle>
                                <FooterCardImage src={ ImgPhone } />
                                <FooterCardDetail>0813-3288-4492</FooterCardDetail>
                            </FooterCard>
                            <FooterCard>
                                <FooterCardTitle>WhatsApp</FooterCardTitle>
                                <FooterCardImage src={ ImgWhatsApp } />
                                <FooterCardDetail>0899-2134-0212</FooterCardDetail>
                            </FooterCard>
                            <FooterCard>
                                <FooterCardTitle>Email</FooterCardTitle>
                                <FooterCardImage src={ ImgEmail } />
                                <FooterCardDetail>pramu@gmail.com</FooterCardDetail>
                            </FooterCard>
                            <FooterCard>
                                <FooterCardTitle>Lokasi</FooterCardTitle>
                                <FooterCardImage src={ ImgLocation } />
                                <FooterCardDetail>Keputih, Sukolilo, Surabaya 60111</FooterCardDetail>
                            </FooterCard>
                        </FlexContainer>
                    </Container>
                </FooterSection>
                <Footer />
            </Base>
        )
    }
}

export default contact
