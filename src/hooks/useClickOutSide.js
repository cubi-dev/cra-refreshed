import React from "react";

export default function useClickOutSide() {
  const [show, setShow] = React.useState(false);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutDropDown(e) {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        setShow(false);
      }
      //   else {
      //     console.log("Click inside dropdown");
      //   }
    }
    document.addEventListener("click", handleClickOutDropDown);
    return () => document.removeEventListener("click", handleClickOutDropDown);
  }, []);
  return { show, setShow, nodeRef };
}
