import styled, {keyframes} from "styled-components";
import img from "../images/meteor.png";

const meteorFly = keyframes`
    from {top:0;}
    to {top:600px;}
`

export const MeteorSprite = styled.div `
    position: absolute;
    width: 100px;
    height: 100px;
    left: ${props => props.left}px;
    z-index: 5;
    background: transparent url(${img}) top / contain;
    transform: translateY(-100px);
    animation: ${meteorFly} 3s linear;
`

