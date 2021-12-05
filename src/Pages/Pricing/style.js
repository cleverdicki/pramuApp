import styled from "styled-components"
import Vector from '../../Assets/Images/vector.png'

export const Base = styled.div`
    overflow: hidden;
    background-image: url(${Vector});
    background-repeat: no-repeat;
    background-size: 100% 750px;
    width: 100%;
`

export const Button = styled.button`
    font-weight: bold;
    color: #0061FF;
    background-color: #FFFFFF;
    border-radius: 20px;
    border-color: #0061FF;
    padding: 5px 10px;
`

export const Card = styled.div`
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    background-color: #FFFFFF;
    margin: 50px 0;
    width: 348px;
`

export const CardContainer = styled.div`
    padding: 30px 30px;
`

export const CardDetail = styled.p`
    color: #737373;
    font-size: 13px;
`

export const CardTitle = styled.h6`
    font-weight: bold;
`

export const CardSold = styled(CardDetail)`
    font-weight: bold;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Image = styled.img`
    border-radius: 10px;
`

export const MainComponent = styled.div`
    margin: 50px 0;
`

export const MainDetail = styled.p`
    margin: 25px 0;
    color: #FFFFFF;
    font-size: 25px;
`

export const MainTitle = styled.h2`
    font-weight: bold;
    color: #FFFFFF;
`