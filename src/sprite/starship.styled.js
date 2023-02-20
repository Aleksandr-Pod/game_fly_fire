import styled from "styled-components";
import Starship from "../images/starship.png";

export const StarshipSprite = styled.div`
    width: 50px;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: yellow;
    background: transparent url(${Starship}) center / contain;
`