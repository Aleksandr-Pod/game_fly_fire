// import { useEffect } from 'react';
import { MeteorSprite } from './meteor.styled.js';

export const Meteor = ({x}) => {
    // useEffect (() => {
    //     console.log("position x in component:", x)
    // }, [x])
    
    return (
        <MeteorSprite left={x}></MeteorSprite> 
    )
}