import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

function footer() {
    return (
        <div className='footer-page'>
            <h4 className='footer-text'>Get in Touch</h4>
            <h6 className='footer-text'><FontAwesomeIcon icon={faPhone} /> 0813-3288-4492</h6>
            <h6 className='footer-text'><FontAwesomeIcon icon={faMapMarkerAlt} /> Keputih, Sukolilo, Surabaya, Jawa Timur</h6>
            <h6 className='footer-text'><FontAwesomeIcon icon={faEnvelope} /> pramu@gmail.com</h6>
            <h3 className='footer-text'>Home | Pricing | Contact | Join Us</h3>
        </div>
    )
}

export default footer
