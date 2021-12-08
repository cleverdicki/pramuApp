import styled from "styled-components"
import BackgroundImage from '../../Assets/Images/background-thanks.png'

export const Base = styled.div`
    overflow: hidden;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: 100% 875px;
    width: 100%;
`

export const Detail = styled.h4`
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    font-size: 40px;
    margin-top: 25px;
`

export const MainContainer = styled.div`
    margin: 249px 0;
`

export const Title = styled.h1`
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    font-size: 100px;
`