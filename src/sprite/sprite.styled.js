import styled from "styled-components";
import { position } from "../position";

export const Sprite = styled.div`
    position: absolute;
    left: ${position.left}px;
    top: ${position.top}px;
    width: 100px;
    height: 100px;
    background-color: blue;
`