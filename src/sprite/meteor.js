import { useState, useEffect } from 'react';
import { globalData } from '../globalData';
import img from "../images/meteor.png";

export const Meteor = ({x, setMeteor}) => {
  const [y, setY] = useState(-100);

  useEffect(() => {
    if (!globalData.meteor.flyId) {
      globalData.meteor.flyId = setInterval(() => setY(prev => prev +5), 20);
    }
    return () => {
      clearInterval(globalData.meteor.flyId);
      globalData.meteor.flyId = null;
      globalData.meteor.timer = null;
    }
  }, [])
  
  if (y > 600) setTimeout(() => setMeteor(false), 20); // unMount in parent component

  return (
    <div style={{
      position: "absolute",
      width: 100,
      height: 100,
      left: x,
      top: y,
      zIndex: 5,
      background: `transparent url(${img}) top / contain`
      }}></div>
  )
}