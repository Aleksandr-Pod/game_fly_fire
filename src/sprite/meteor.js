import { useEffect } from 'react';
import { globalData } from '../position';
import './meteor.styled.js';
import { MeteorSprite } from './meteor.styled.js';

const Meteor = ({x}) => {
    useEffect (() => {
        if (globalData.meteorPositionX)
        console.log("position x in component:", x)
    }, [x])
    

    return (
        <MeteorSprite left={x}></MeteorSprite> 
    )
}

export default Meteor;