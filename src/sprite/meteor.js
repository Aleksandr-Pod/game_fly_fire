import { useState } from 'react';
import { globalData } from '../globalData';
import { MeteorSprite } from './meteor.styled';

export const Meteor = ({x, setMeteor}) => {
    const [y, setY] = useState(-100);

    // on Mount - move down every 20 msec
    if (y === -100) {
        console.log('starting meteor move');
        globalData.meteor.flyId = setInterval(() => {
            setY(prev => prev +5);
        }, 20);
    }
    
    if (y > 600){
        console.log("stop meteor move");
        clearInterval(globalData.meteor.flyId);
        globalData.meteor.timer = null;
        setTimeout(() => setMeteor(false), 20); // unMount in parent component
    }

    return (
        <MeteorSprite left={x} top={y}></MeteorSprite> 
    )
}