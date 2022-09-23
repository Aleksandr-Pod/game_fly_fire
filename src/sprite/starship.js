import {BulletStyle, StarshipSprite} from './starship.styled.js';

export const Starship = ({left, top, fire}) => {
    return (
        <>
            <BulletStyle left={left} top={top} fire={fire}></BulletStyle>
            <StarshipSprite left={left} top={top} bgrColor={fire ? "orange" : "blue"}>A</StarshipSprite>
        </>
    )
}