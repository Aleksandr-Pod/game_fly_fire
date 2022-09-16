// import {Sprite} from './sprite.styled.js';

export const SpriteObj = ({left, top, fire}) => {
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
    };
    const bulletStyle = {
        position: "absolute",
        width: 0,
        height: `${top-10}px`,
        backgroundColor: "red",
        left: `${left+24}px`,
        top: "10px"
    };
    const bulletFly = () => {
        bulletStyle.width = "2px";
    };
    const bulletFlyStop = () => {
        bulletStyle.width = 0;
    }
    if (fire) {
        spriteStyle.backgroundColor = "orange";
        bulletFly();
    } else {
        spriteStyle.backgroundColor = "blue";
        bulletFlyStop();
    }

    return (
        <>
            <div style={bulletStyle}></div>
            <div style={spriteStyle}>A</div>
        </>
    )
}