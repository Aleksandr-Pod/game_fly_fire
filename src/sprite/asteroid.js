import {useState, useEffect } from "react";
import { AsteroidSprite } from './asteroid.styled.js';
import { globalData } from '../globalData';
import img from "../images/asteroid-1.png";

export const Asteroid = ({x, speed, degree, setAsteroid}) => {
  const [y, setY] = useState(-100);

  useEffect(() => {
    if (!globalData.asteroid.flyId) {
      globalData.asteroid.flyId = setInterval(() => setY(prev => prev + speed), 16);
    }
    return () => {
      clearInterval(globalData.asteroid.flyId);
      globalData.asteroid.flyId = null;
      globalData.asteroid.timer = null;
    }
  }, [speed])
  
  if (y > 800) setTimeout(() => setAsteroid(false), 20); // unMount in parent component

  return (
    <div style={{
      position: "absolute",
      left: x,
      top: y,
      zIndex: 5,
      }}>
      <AsteroidSprite degree={degree}/>
    </div>
  )
}