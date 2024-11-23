import React from "react";
import TimeDisplay from "./TimeDisplay";
import Timer from "./Timer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>System Time Display and Countdown</h1>
      <TimeDisplay />
      <Timer />
    </div>
  );
}

export default App;
