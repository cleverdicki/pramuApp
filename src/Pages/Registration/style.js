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
    padding: 10px;
    color: #ffffff;
    background-color: #FC724D;
    border-radius: 5px;
    border-style: none;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
`

export const Card = styled.div`
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.2);
    border-radius: 50px;
    background-color: #FFFFFF;
    margin: 50px 0;
    width: 600px;
    height: 500px;
    display: flex;
    margin: auto;
`

export const CardContainer = styled.div`
    margin: 50px;
`

export const CardInput = styled.input`
    margin-bottom: 25px;
    border-radius: 5px;
    border-style: none;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
`

export const CardTitle = styled.label`
    font-weight: bold;
    font-size: 17px;
`

export const Dropdown = styled.select`
    margin-bottom: 25px;
    border-radius: 5px;
    border-style: none;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
`

export const MainContainer = styled.div`
    margin: 75px 0;
`

export const MainTitle = styled.h1`
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    margin: 25px 0;
`