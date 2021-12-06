import React, { Component } from 'react'
import Partner from '../../../Assets/Images/partner.png'
import Insurance from '../../../Assets/Images/insurance.png'
import Income from '../../../Assets/Images/income.png'
import Knowledge from '../../../Assets/Images/knowledge.png'
import { Base, Card, CardContainer, CardTitle, CardDetail, CardImage, Detail, Title } from './style'

export class sectionBottom extends Component {
    render() {
        return (
            <Base>
                <Title>Kenapa Pramu?</Title>
                <Detail>Kami memberikan beberapa keuntungan!</Detail>
                <CardContainer>
                    <Card>
                        <CardTitle>Partner yang Luas</CardTitle>
                        <CardDetail>Kami jasa kebersihan rumah dengan jutaan partner yang tersebar di seluruh Indonesia</CardDetail>
                        <CardImage src={ Partner } />
                    </Card>
                    <Card>
                        <CardTitle>Asuransi Kehidupan</CardTitle>
                        <CardDetail>Bagi kami, keamanan adalah nomor satu! Perlindungan asuransi merupakan sarana terbaik</CardDetail>
                        <CardImage src={ Insurance } />
                    </Card>
                    <Card>
                        <CardTitle>Pendapatan Maksimal</CardTitle>
                        <CardDetail>Mendapatkan penghasilan terbaik tanpa dibebani dengan ketentuan yang memberatkan</CardDetail>
                        <CardImage src={ Income } />
                    </Card>
                    <Card>
                        <CardTitle>Pembekalan Ilmu</CardTitle>
                        <CardDetail>Dapatkan pembelajaran bermanfaat mengenai standarisasi kebersihan, protokol kebersihan, dan masih banyak lagi</CardDetail>
                        <CardImage src={ Knowledge } />
                    </Card>
                </CardContainer>
            </Base>
        )
    }
}

export default sectionBottom
