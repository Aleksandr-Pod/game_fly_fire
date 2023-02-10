import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import  { setX, setY, setFire } from "./Redux/positionSlice";

import { Starship } from "./sprite/starship";
import { Meteor } from "./sprite/meteor";
import { Asteroid } from "./sprite/asteroid";
import { globalData } from "./globalData";


const Gaming = () => {
  const dispatch = useDispatch();
  const {left, top, fire} = useSelector(state => state.position)
  // starship states:
  // const [left, setLeft] = useState(200);
  // const [top, setTop] = useState(400);
  // const [fire, setFire] = useState(false);
  // meteor, asteroid
  const [meteor, setMeteor] = useState(false);
  const [asteroid, setAsteroid] = useState(false);

  const {moveIntervalId} = globalData;


  const handleKeyup = useCallback((e) => {
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
  });

  const handleKeydown = useCallback((e) =>  {
    // console.log(e.code)
    switch (e.code) {
      case "ArrowLeft":
        if (moveIntervalId.left) return;
        if (moveIntervalId.right) return;// if left & was right
        moveIntervalId.left = setInterval(
          () => {
            // setX(prev => prev > 0 ? prev - 10 : prev)
            if ( left > 0 ) dispatch(setX(-10));
          }, 20
        );
        break;
      case "ArrowRight":
        if (moveIntervalId.right) return;
        if (moveIntervalId.left) return; // if right & was left 
        moveIntervalId.right = setInterval(
          () => {
            // setLeft(prev => prev < 950 ? prev + 10 : prev)
            if ( left < 950 ) dispatch(setX(10));
          }, 20
        );
        break;
      case "ArrowUp":
        if (moveIntervalId.up) return;
        moveIntervalId.up = setInterval(
          () => {
            // setTop(prev => prev > 200 ? prev - 10 : prev)
            if (top > 200) dispatch(setY(-10))
          }, 20
        );
        break;
      case "ArrowDown":
        if (moveIntervalId.down) return;
        moveIntervalId.down = setInterval(
          () => {
          // setTop(prev => prev < 450 ? prev + 10 : prev)
          if (top < 550) dispatch(setY(10))
        }, 20
        );
        break;
      case "Space":
        console.log("fire");
        dispatch(setFire(true));
        setTimeout(() => dispatch(setFire(false)), 100);
        break;  
      default:
        break;
    }
  });

  useEffect(() => {
    console.log("Key EventListeners ON");
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('keyup', handleKeyup);
      console.log("Key EventListeners Off");
    }
  }, [])

  useEffect(()=> {
    if(globalData.meteor.timer) return;
      // calculate time of flying
    globalData.meteor.timer = Math.floor(Math.random()*1500+500);
    console.log('meteorFly in ..', globalData.meteor.timer, "mSec");
    globalData.meteor.positionX = Math.floor(Math.random() * (950 - 100) + 100);
    globalData.meteor.speed = Math.floor(Math.random() * 7 + 3);
    setTimeout(() => setMeteor(true), globalData.meteor.timer);
  },[meteor])

  useEffect(()=> {
    if(globalData.asteroid.timer) return;
      // calculate time of flying
    globalData.asteroid.timer = Math.floor(Math.random()*1500+500);
    console.log('asteroid fly in ..', globalData.asteroid.timer, "mSec");
    globalData.asteroid.positionX = Math.floor(Math.random() * (950 - 100) + 100);
    globalData.asteroid.speed = Math.floor(Math.random() * 7 + 3);
    setTimeout(()=> setAsteroid(true), globalData.asteroid.timer);
  },[asteroid])
    
  return (
    <>
      <Starship top={top} left={left} fire={fire}/>
      {meteor && <Meteor x={globalData.meteor.positionX} speed={globalData.meteor.speed}
      setMeteor={setMeteor}/>}
      {asteroid && <Asteroid x={globalData.asteroid.positionX} speed={globalData.asteroid.speed}
        degree={globalData.asteroid.rotationDegree} setAsteroid={setAsteroid}/>}
    </>
  )
}
export default Gaming;