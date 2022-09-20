import {useState} from "react";
import {globalData} from "./position";
import {SpriteObj} from "./sprite/sprite";
import Meteor from "./sprite/meteor";
import './App.css';

const {position, moveIntervalId} = globalData;

function App() {
  const [left, setLeft] = useState(position.left);
  const [top, setTop] = useState(position.top);
  const [fire, setFire] = useState(false);
  const [meteor, setMeteor] = useState(false);

  // globalData.meteorPositionX = useRef(500);

  // let leftIntervalId = useRef(null);
  // let rightIntervalId = useRef(null);
  // let upIntervalId = useRef(null);
  // let downIntervalId = useRef(null);

  const handleKeydown = (e) => {
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

  const handleKeyup = (e) => {
    
    switch (e.code) {
      case "ArrowLeft":
        clearInterval(moveIntervalId.left);
        moveIntervalId.left = null;
        console.log("keyUp:", e.code);
        break;
      case "ArrowRight":
        clearInterval(moveIntervalId.right);
        moveIntervalId.right = null;
        console.log("keyUp:", e.code);
        break;
      case "ArrowUp":
        clearInterval(moveIntervalId.up);
        moveIntervalId.up = null;
        console.log("keyUp:", e.code);
        break;
      case "ArrowDown":
        clearInterval(moveIntervalId.down);
        moveIntervalId.down = null;
        console.log("keyUp:", e.code);
        break;
      default:
        break;
    }
  }
  const meteorFly = () => {
    globalData.meteorPositionX = Math.floor(Math.random() * (950 - 100) + 100);
    setMeteor(true);
    setTimeout(() => {setMeteor(false)}, 3000);
    console.log("meteorFly x:", globalData.meteorPositionX);
  }
  
  const start = () => {
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);
    globalData.meteorFlyId = setInterval(() => meteorFly(), 5000);

  }
  const stop = () => {
    clearInterval(globalData.meteorFlyId);
  }

  return (
    <><div className="dashboard">
        <h2>стрелками на клавиатуре перемещайте ваш самолёт</h2>
        <h2>Пробел - огонь</h2>
        <button type="button" onClick={start}>START</button>
        <p className="position">top: <span className="pos-figure">{top}</span>_______left:<span className="pos-figure">{left}</span></p>
      </div>
      <div className="field" onKeyDown={handleKeydown}>
        {meteor && <Meteor x={globalData.meteorPositionX}/>}
        <div className="stars"></div>
        <div className="twinkling"></div>
        <SpriteObj top={top} left={left} fire={fire}/>
      </div>
    </>
  );
}

export default App;
