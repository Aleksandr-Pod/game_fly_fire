// import {Sprite} from './sprite.styled.js';

export const SpriteObj = ({left, top}) => {
const spriteStyle = {
    position: "absolute",
    width: "50px",
    height: "50px",
    backgroundColor: "blue",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    color: "yellow",
    top,
    left
}
    return (
        <div style={spriteStyle}>A</div>
    )
}