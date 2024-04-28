import React from "react";

export default function useClickOutSide(dom = "button") {
  const [show, setShow] = React.useState(false);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutSide(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
      //   else {
      //     console.log("Click inside dropdown");
      //   }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => document.removeEventListener("click", handleClickOutSide);
  }, [dom]);
  return { show, setShow, nodeRef };
}
