import styled from "styled-components";
// import { position } from "../position";

export const StarshipSprite = styled.div`
    position: absolute;
    z-Index: 5;
    width: 50px;
    height: 50px;
    background-color: ${props => props.bgrColor};
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: yellow;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
`
export const BulletStyle = styled.div`
    position: absolute;
    width: ${props => props.fire ? "2px" : 0};
    height: ${props => props.top-10}px;
    background-color: red;
    left: ${props => props.left+24}px;
    top: 10px;
`