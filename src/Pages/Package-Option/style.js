import styled from "styled-components"
import Vector from '../../Assets/Images/vector.png'

export const Base = styled.div`
    overflow: hidden;
    background-image: url(${Vector});
    background-repeat: no-repeat;
    background-size: 100% 875px;
    width: 100%;
`

export const Button = styled.button`
    margin: 30px auto;
    display: block;
    padding: 10px;
    color: #ffffff;
    background-color: #FC724D;
    border-radius: 10px;
    border-style: none;
`

export const ButtonChild = styled(Button)`
    margin-top: 275px;
`

export const Card = styled.div`
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    background-color: #FFFFFF;
    height: 600px;
    padding: 25px;
`

export const CardContainer = styled.div`
    margin: 50px 0;
`

export const CardDetail = styled.p`
    color: #737373;
    font-size: 13px;
`

export const CardDetailContainer = styled.div`
    margin: 35px 0;
`

export const CardTitle = styled.h2`
    font-weight: bold;
`

export const CardTitleChild = styled(CardTitle)`
    font-size: 20px;
`

export const CardTitleChildBarang = styled(CardTitle)`
    font-size: 15px;
`

export const Image = styled.img`
    border-radius: 10px;
    width: 800px;
    height: 600px;
`

export const MainContainer = styled.div`
    margin: 50px 0;
`

export const MainDetail = styled.p`
    color: #FFFFFF;
    font-size: 20px;
`

export const MainTitle = styled.h1`
    font-weight: bold;
    color: #FFFFFF;
`