import {BulletStyle, Sprite} from './sprite.styled.js';

export const SpriteObj = ({left, top, fire}) => {
    // const spriteStyle = {
    //     position: "absolute",
    //     zIndex: 5,
    //     width: "50px",
    //     height: "50px",
    //     backgroundColor: "blue",
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     textAlign: "center",
    //     color: "yellow",
    //     top,
    //     left
    // };
    // let bgrColor;

    // const bulletFly = () => {
    //     bulletStyle.width = "2px";
    // };
    // const bulletFlyStop = () => {
    //     bulletStyle.width = 0;
    // }
    if (fire) {
        // spriteStyle.backgroundColor = "orange";
        // bgrColor = "orange";
        // bulletFly();
    } else {
        // spriteStyle.backgroundColor = "blue";
        // bgrColor = "blue"
        // bulletFlyStop();
    }

    return (
        <>
            <BulletStyle left={left} top={top} fire={fire}></BulletStyle>
            <Sprite left={left} top={top} bgrColor={fire ? "orange" : "blue"}>A</Sprite>
        </>
    )
}