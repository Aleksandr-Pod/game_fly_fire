import { useEffect, useCallback, useState } from "react";
import {SpriteObj} from "./sprite/sprite";
import {position} from "./position";
import './App.css';

function App() {
  const [left, setLeft] = useState(position.left);
  const [top, setTop] = useState(position.top);
  const [fire, setFire] = useState(false);

  const handleKeydown = useCallback((e) => {
    // console.log(e.code)
    // console.log({top, left})
    switch (e.code) {
      case "ArrowLeft":
        if (left < 100) return;
        setLeft(prev => prev - 10);
        // position.left -=10;
        break;
      case "ArrowRight":
        if (left > 900) return;
        setLeft(prev => prev + 10);
        // position.left +=10;
        break;
      case "ArrowUp":
        if (top < 200) return;
        setTop(prev => prev - 10); 
        // position.top -=10;
        break;
      case "ArrowDown":
        if (top > 600) return;
        setTop(prev => prev + 10);
        // position.top +=10;
        break;
      case "Space":
        console.log("fire");
        setFire(true);
        setTimeout(() => setFire(false), 100);
        break;  
      default:
        break;
    }
  },[left, top])
  
useEffect(() => {
  document.addEventListener('keydown', handleKeydown);
  return () => document.removeEventListener('keydown', handleKeydown);
}, [handleKeydown]);


  return (
    <div className='field' onKeyDown={handleKeydown}><hr/>
      <p>стрелками на клавиатуре перемещайте ваш самолёт</p>
      <p>Пробел - это выстрел</p>
      <SpriteObj top={top} left={left} fire={fire}/>
    </div>
  );
}

export default App;
