import React, { useState } from "react";

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState("");

  const handleFetchTime = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setCurrentTime(formattedTime);
  };

  return (
    <div className="time-display">
      <h2>Get Current Time</h2>
      <button onClick={handleFetchTime}>Show Current Time</button>
      {currentTime && <p>Current Time: {currentTime}</p>}
    </div>
  );
}

export default TimeDisplay;
