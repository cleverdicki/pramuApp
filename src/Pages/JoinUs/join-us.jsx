import React, { Component } from 'react'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import SectionBottom from './SectionBottom/section-bottom'
import SectionTop from './SectionTop/section-top'
import { Base } from './style'

export class joinUs extends Component {
    render() {
        return (
            <Base>
                <Header />
                    <SectionTop />
                    <SectionBottom />
                <Footer />
            </Base>
        )
    }
}

export default joinUs
