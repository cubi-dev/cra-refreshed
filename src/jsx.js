import React from "react";

const jsx = () => {
  const el = (
    <div id="root">
      {" "}
      <h1> Hello World </h1>{" "}
    </div>
  );
  const elR = React.createElement(
    "div",
    { id: "root" },
    React.createElement("h1", null, "Hello World")
  );

  const el2 = (
    <div>
      <span> Hello </span> <span> World </span>
    </div>
  );
  const elR2 = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.createElement("span", null, "World"),
    ],
  });
// ternary operator
  return (
    <div>
      <div className="heading" id="heading">
        This is heading
      </div>
      <div className="heading2"></div>
    </div>
  );
};

export default jsx;
