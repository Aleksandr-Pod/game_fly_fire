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
    width: 100px;
    height: 100px;
    background: transparent url(${img}) center / contain;
    animation: ${props => moveDown(props.degree)} 5s linear;
`