// import "./App.css";
import React from "react";
import "./index.css";

function App() {
  // React.useEffect(() => {
  //   const timer = setInterval(() => {

  //   }, interval);
  //   return () => clearInterval(timer);
  // }, [])
  const timerRef = React.useRef(null);
  const [count, setCount] = React.useState(0);

  const handleStart = () => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  React.useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
