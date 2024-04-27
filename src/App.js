// import "./App.css";
import React from "react";
import "./index.css";

function App() {
  // const [count, setCount] = React.useState(0);
  const countRef = React.useRef(0);
  const handle = () => {
    const updateCount = countRef.current + 1;
    console.log(`Clicked ${updateCount} times`);
    // setCount(updateCount);
    countRef.current++;
  };
  console.log("Render");
  return (
    <div>
      <button onClick={handle}>Click me</button>
    </div>
  );
}

export default App;
