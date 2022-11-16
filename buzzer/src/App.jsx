import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const buzzz = () => {
    console.log("sending a buzz", teamName);
    axios
      .post("http://192.168.29.112:3000/buzz", {
        name: teamName,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          console.log("BUZZZZZ");
        }
      });
  };
  const [teamName, setTeamName] = useState("");

  return (
    <div className="App">
      <input type="text" onChange={(e) => setTeamName(e.target.value)} />
      <div className="buzz" onClick={buzzz}></div>
    </div>
  );
}

export default App;
