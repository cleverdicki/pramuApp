import React, { Component } from 'react'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import Part1 from './Part1/part1'
import Part2 from './Part2/part2'
import Part3 from './Part3/part3'
import Part4 from './Part4/part4'
import { Container } from 'react-bootstrap'
import { Base } from './style'

export class home extends Component {
    render() {
        return (
            <Base>
                <Header />
                <Container>
                    <Part1 />
                    <Part2 />
                </Container>
                <Part3 />
                <Container>
                    <Part4 />
                </Container>
                <Footer className='fixed-bottom' />
            </Base>
        )
    }
}

export default home
