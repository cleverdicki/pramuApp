import styled from "styled-components"
import Vector from '../../Assets/Images/vector.png'

export const Base = styled.div`
    background-image: url(${Vector});
    background-repeat: no-repeat;
    background-size: 100% 750px;
    width: 100%;
    heigt: auto;
`

export const ButtonTemplate = styled.button`
    padding: 7px;
    color: #ffffff;
    background-color: #FC724D;
    border-radius: 5px;
    border-style: none;
`

export const ColLeftMain = styled.div`
    color: white;
`

export const ColRightMain = styled.div`
    display: flex;
    justify-content: center;
`

export const MainH1 = styled.h1`
    font-size: 65px;
    font-weight: bold;
    padding: 5px 0px;
`

export const MainH5 = styled.h5`
    padding: 5px 0px;
`

export const MainP = styled.p`
    padding: 5px 0px;
`

export const RowMain = styled.div`
    margin: 25px 0 0 0 !important;
`
