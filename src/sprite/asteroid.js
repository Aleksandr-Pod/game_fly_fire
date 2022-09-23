// import { useEffect } from 'react';
import { AsteroidSprite } from './asteroid.styled.js';

export const Asteroid = ({x, degree}) => {
    // useEffect (() => {
    //     console.log("position x in component:", x)
    // }, [x])
    
    return (
        <AsteroidSprite left={x} degree={degree}></AsteroidSprite> 
    )
}