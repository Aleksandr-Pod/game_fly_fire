import { useState, useRef } from "react";
import {SpriteObj} from "./sprite/sprite";
import {position} from "./position";
import './App.css';

function App() {
  const [left, setLeft] = useState(position.left);
  const [top, setTop] = useState(position.top);
  const [fire, setFire] = useState(false);
  let leftIntervalId = useRef(null);
  let rightIntervalId = useRef(null);
  let upIntervalId = useRef(null);
  let downIntervalId = useRef(null);

  const handleKeydown = (e) => {
    // console.log(e.code)
    switch (e.code) {
      case "ArrowLeft":
        if (leftIntervalId.current) return;
        if (rightIntervalId.current) return;// if left & was right
        leftIntervalId.current = setInterval(
          () => setLeft(prev => prev > 100 ? prev - 10 : prev), 20
        );
        break;
      case "ArrowRight":
        // if (left > 900) return;
        if (rightIntervalId.current) return;
        if (leftIntervalId.current) return; // if right & was left 
        rightIntervalId.current = setInterval(
          () => setLeft(prev => prev < 900 ? prev + 10 : prev), 20
        );
        break;
      case "ArrowUp":
        // if (top < 200) return;
        if (upIntervalId.current) return;
        upIntervalId.current = setInterval(
          () => setTop(prev => prev > 200 ? prev - 10 : prev), 20
        );
        break;
      case "ArrowDown":
        // if (top > 600) return;
        if (downIntervalId.current) return;
        downIntervalId.current = setInterval(
          () => setTop(prev => prev < 500 ? prev + 10 : prev), 20
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

  const handleKeyup = (e) => {
    
    switch (e.code) {
      case "ArrowLeft":
        clearInterval(leftIntervalId.current);
        leftIntervalId.current = null;
        console.log("keyUp:", e.code);
        // document.removeEventListener('keyup', handleKeyup);
        break;
      case "ArrowRight":
        clearInterval(rightIntervalId.current);
        rightIntervalId.current = null;
        console.log("keyUp:", e.code);
        // document.removeEventListener('keyup', handleKeyup);
        break;
      case "ArrowUp":
        clearInterval(upIntervalId.current);
        upIntervalId.current = null;
        console.log("keyUp:", e.code);
        // document.removeEventListener('keyup', handleKeyup);
        break;
      case "ArrowDown":
        clearInterval(downIntervalId.current);
        downIntervalId.current = null;
        console.log("keyUp:", e.code);
        // document.removeEventListener('keyup', handleKeyup);
        break;
      default:
        break;
    }

  }
  
  const start = () => {
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup)
  }

  return (
    <div className='field' onKeyDown={handleKeydown}><hr/>
      <p>стрелками на клавиатуре перемещайте ваш самолёт</p>
      <p>Пробел - это выстрел</p>
      <button type="button" onClick={start}>START</button>
      <p>top: {top}_______left: {left}</p>

      <SpriteObj top={top} left={left} fire={fire}/>
    </div>
  );
}

export default App;
