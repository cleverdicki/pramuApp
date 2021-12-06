import styled from "styled-components"
import Vector from '../../Assets/Images/vector.png'

export const Base = styled.div`
    overflow: hidden;
    background-image: url(${Vector});
    background-repeat: no-repeat;
    background-size: 100% 750px;
    width: 100%;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const FooterCard = styled.div`
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    background-color: #FFFFFF;
    width: 300px;
    margin-bottom: 25px;
`

export const FooterCardTitle = styled.h5`
    font-weight: bold;
    text-align: center;
    margin: 25px 0;
`

export const FooterCardDetail = styled.h6`
    font-weight: 300;
    text-align: center;
    margin: 25px 0;
`

export const FooterCardImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    widht: auto;
    height: 150px;
`

export const FooterSection = styled.footer`
    background-color: #26335D;
`

export const FooterTitle = styled.h1`
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 50px;
`

export const Image = styled.img`
    margin: 25px 0 0 0;
    width: 100%;
`