import styled from "styled-components"

export const Base = styled.div`
    background-color: #0061FF;
    border-radius: 75px 75px 0 0;
    margin-top: -10px;
    padding: 75px 0;
`

export const Card = styled.div`
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.2);
    border-radius: 50px;
    background-color: #FFFFFF;
    padding: 25px 0;
    margin-top: 50px;
    width: 300px;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const CardTitle = styled.h5`
    font-weight: bold;
    text-align: center;
`

export const CardDetail = styled.p`
    padding: 10px 25px;
    font-size: 13px;
`

export const CardImage = styled.img`

`

export const Title = styled.h1`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 75px;
    text-align: center;
`

export const Detail = styled(Title)`
    font-size: 20px;
`
