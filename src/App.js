import {useState} from "react";
import Gaming from "./gaming";
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <div className="dashboard">
        <div className="info">
          <h2>стрелками на клавиатуре перемещайте ваш самолёт</h2>
          <h2>Пробел - огонь</h2>
        </div>
        <div className="dashBtns">
          <button type="button" onClick={() => setStarted(true)}>START</button>
          <button type="button" onClick={() => setStarted(false)}>Stop</button>
        </div>
      </div>
      <div className="field">
        {/* {meteor && <Meteor x={globalData.meteorPositionX}/>} */}
        <div className="stars"></div>
        <div className="twinkling"></div>
        {started && <Gaming/>}
        {/* <Starship top={top} left={left} fire={fire}/> */}
      </div>
    </>
  );
}

export default App;
