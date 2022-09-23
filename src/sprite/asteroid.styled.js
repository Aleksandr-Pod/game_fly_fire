import styled, {keyframes} from "styled-components";
import img from "../images/asteroid-1.png";

const moveDown = degree => keyframes`
    from {
        top:-100px;
        transform: rotate(0deg);
    }
    to {
        top:600px;
        transform: rotate(${degree}deg);
    }
`

export const AsteroidSprite = styled.div `
    position: absolute;
    width: 100px;
    height: 100px;
    left: ${props => props.left}px;
    z-index: 5;
    background: transparent url(${img}) center / contain;
    animation: ${props => moveDown(props.degree)} 5s linear;
`