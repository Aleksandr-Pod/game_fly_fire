import styled from "styled-components";
import img from "../images/meteor.png";

// const meteorFly = keyframes`
//     from {top:-100px;}
//     to {top:600px;}
// `

export const MeteorSprite = styled.div `
    position: absolute;
    width: 100px;
    height: 100px;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    z-index: 5;
    background: transparent url(${img}) top / contain;
    

`

