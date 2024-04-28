import React from "react";
import "./index.css";
import SidebarMenu from "./components/SidebarMenu";
import useClickOutSide from "./hooks/useClickOutSide";

function App() {
  // const [show, setShow] = React.useState(false);
  const { setShow, show, nodeRef } = useClickOutSide("span");
  return (
    <div>
      <span
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer"
      >
        Show menu
      </span>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
    </div>
  );
}

export default App;
