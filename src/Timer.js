import React, { useState, useEffect } from "react";

function Timer() {
  const [inputTime, setInputTime] = useState("");
  const [remainingTime, setRemainingTime] = useState(null);
  const [status, setStatus] = useState("idle"); // "idle", "running", "complete"

  const handleStartTimer = () => {
    if (Number(inputTime) > 0) {
      setRemainingTime(Number(inputTime));
      setStatus("running");
    }
  };

  useEffect(() => {
    if (status === "running" && remainingTime > 0) {
      const timerId = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (remainingTime === 0) {
      setStatus("complete");
    }
  }, [status, remainingTime]);

  return (
    <div className="timer">
      <h2>Countdown Timer</h2>
      {status !== "running" && (
        <input
          type="text"
          placeholder="Enter seconds"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        />
      )}
      <button
        onClick={handleStartTimer}
        disabled={status === "running" || inputTime <= 0}
      >
        Start
      </button>
      {status === "running" && <p>Time Left: {remainingTime}s</p>}
      {status === "complete" && (
        <p>Countdown Finished!!</p>
      )}
    </div>
  );
}

export default Timer;
