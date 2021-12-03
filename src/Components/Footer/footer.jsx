import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FooterPage, FooterTextH3, FooterTextH4, FooterTextH6 } from './style'

export class footer extends Component {
    render() {
        return (
            <FooterPage>
                <FooterTextH4>Get in Touch</FooterTextH4>
                <FooterTextH6><FontAwesomeIcon icon={faPhone} /> 0813-3288-4492</FooterTextH6>
                <FooterTextH6><FontAwesomeIcon icon={faMapMarkerAlt} /> Keputih, Sukolilo, Surabaya, Jawa Timur</FooterTextH6>
                <FooterTextH6><FontAwesomeIcon icon={faEnvelope} /> pramu@gmail.com</FooterTextH6>
                <FooterTextH3>Home | Pricing | Contact | Join Us</FooterTextH3>
            </FooterPage>
        )
    }
}

export default footer
