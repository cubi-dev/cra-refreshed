import React, { useEffect, useState } from "react";

const Counter = () => {
  // eslint-disable-next-line
  // const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //     setTimeout(function delay() {
  //         setCount((count) => count + 1);
  //     }, 1000);
  // };
  const [info, setInfo] = useState({
    firstName: "Nguyen",
    lastName: "Dung",
  });

  useEffect(() => {
    console.log(`From input`);
  }, [info.lastName]);

  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="lastName"
        value={info.lastName}
        onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
      />
      {/* <span className="text-2xl font-bold ">{count}</span>
      <button onClick={() => setCount(count + 1)} className="inline-block p-3 bg-green-400 text-white">
        Increment
      </button> */}
    </div>
  );
};

export default Counter;
