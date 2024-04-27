import React from "react";

const Input = () => {
  const inputRef = React.useRef();
  const divRef = React.useRef();

  React.useEffect(() => {
    // console.log(divRef.current);
    // if (divRef.current) {
    //     divRef.current.style.backgroundColor = 'red';
    // }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="input-div" ref={divRef}>
      <input
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border border-gray-200 focus:border-blue-400"
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
