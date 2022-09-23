import { useState, useEffect } from "react";
import {Starship} from "./sprite/starship";
import {Meteor} from "./sprite/meteor";
import {Asteroid} from "./sprite/asteroid";
import {globalData} from "./globalData";

const Gaming = () => {
  // starship states:
  const [left, setLeft] = useState(200);
  const [top, setTop] = useState(400);
  const [fire, setFire] = useState(false);
  // meteor
  const [meteor, setMeteor] = useState(false);
  const [asteroid, setAsteroid] = useState(false);

  const {moveIntervalId} = globalData;

  useEffect(() => {
    function handleKeydown(e) {
      // console.log(e.code)
      switch (e.code) {
        case "ArrowLeft":
          if (moveIntervalId.left) return;
          if (moveIntervalId.right) return;// if left & was right
          moveIntervalId.left = setInterval(
            () => setLeft(prev => prev > 0 ? prev - 10 : prev), 20
          );
          break;
        case "ArrowRight":
          if (moveIntervalId.right) return;
          if (moveIntervalId.left) return; // if right & was left 
          moveIntervalId.right = setInterval(
            () => setLeft(prev => prev < 950 ? prev + 10 : prev), 20
          );
          break;
        case "ArrowUp":
          if (moveIntervalId.up) return;
          moveIntervalId.up = setInterval(
            () => setTop(prev => prev > 200 ? prev - 10 : prev), 20
          );
          break;
        case "ArrowDown":
          if (moveIntervalId.down) return;
          moveIntervalId.down = setInterval(
            () => setTop(prev => prev < 450 ? prev + 10 : prev), 20
          );
          break;
        case "Space":
          console.log("fire");
          setFire(true);
          setTimeout(() => setFire(false), 100);
          break;  
        default:
          break;
      }
    };
  
    function handleKeyup(e) {
      switch (e.code) {
        case "ArrowLeft":
          clearInterval(moveIntervalId.left);
          moveIntervalId.left = null;
          // console.log("keyUp:", e.code);
          break;
        case "ArrowRight":
          clearInterval(moveIntervalId.right);
          moveIntervalId.right = null;
          // console.log("keyUp:", e.code);
          break;
        case "ArrowUp":
          clearInterval(moveIntervalId.up);
          moveIntervalId.up = null;
          // console.log("keyUp:", e.code);
          break;
        case "ArrowDown":
          clearInterval(moveIntervalId.down);
          moveIntervalId.down = null;
          // console.log("keyUp:", e.code);
          break;
        default:
          break;
      }
    }
    
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('keyup', handleKeyup);
    }
  }, [moveIntervalId])

  useEffect(()=> {
    if(globalData.meteor.flyId) return;

    globalData.meteor.flyId = setInterval(() => meteorFly(), 4000);
    console.log('meteorFly');

    function meteorFly() {
      globalData.meteor.positionX = Math.floor(Math.random() * (950 - 100) + 100);
      setMeteor(true);
      setTimeout(() => {setMeteor(false)}, 3000); // false should be
      // when it off the screen -- or crashed by laser -- or met a starship
    }
    return () => {
      clearTimeout(globalData.meteor.flyId);
      globalData.meteor.flyId = null;
    }
  },[])

  useEffect(()=> {
    if(globalData.asteroid.flyId) return;

    globalData.asteroid.flyId = setInterval(()=> asteroidFly(), 6000);
    console.log("asteroidFly");

    function asteroidFly() {
      globalData.asteroid.rotationDegree = 450 - Math.floor(Math.random() * (1000-100)+100);
      console.log("asteroid rotation", globalData.asteroid.rotationDegree);
      globalData.asteroid.positionX = Math.floor(Math.random() * (950 - 100) + 100);
      setAsteroid(true);
      setTimeout(() => {setAsteroid(false)}, 5000); // false should be
      // when it off the screen -- or crashed by laser -- or met a starship
    }

    return () => {
      clearTimeout(globalData.asteroid.flyId);
      globalData.asteroid.flyId = null;
    }
  },[])
    
  return (
    <>
      <Starship top={top} left={left} fire={fire}/>
      {meteor && <Meteor x={globalData.meteor.positionX}/>}
      {asteroid && <Asteroid x={globalData.asteroid.positionX}
        degree={globalData.asteroid.rotationDegree}/>}
    </>
  )
}
export default Gaming;