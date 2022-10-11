import { AsteroidSprite } from './asteroid.styled.js';

export const Asteroid = ({x, degree}) => {

    return (
        <AsteroidSprite left={x} degree={degree}></AsteroidSprite> 
    )
}