import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("getting dd");
      getLatestBuzz();
    }, 1000);
  }, []);
  const enableBuzzer = () => {
    axios.post("http://localhost:3000/enablebuzzer", {});
  };

  const disableBuzzer = () => {
    axios.post("http://localhost:3000/disablebuzzer", {});
  };

  const getLatestBuzz = () => {
    axios.post("http://localhost:3000/getlatestbuzz", {}).then((res) => {
      console.log(res.data);
      setLatestBuzz(res.data);
    });
  };

  const [latestBuzz, setLatestBuzz] = useState("");
  return (
    <div className="App">
      <button onClick={enableBuzzer}>Enable</button>
      <button onClick={disableBuzzer}>Disable</button>
      <button onClick={getLatestBuzz}>Get Active Buzzer</button>
      <input type="text" readOnly value={latestBuzz} />
    </div>
  );
}

export default App;
