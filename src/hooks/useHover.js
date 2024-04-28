import React from "react";

export default function useHover() {
  //mouseover : Trạng thái khi rê chuột vào
  //mouseout : Trạng thái khi rời chuột ra
  const [hovered, setHovered] = React.useState(false);
  const nodeRef = React.useRef(null);
  React.useEffect(() => {
    function handleMouseOver() {
      setHovered(true);
    }
    function handleMouseOut() {
      setHovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return { hovered, nodeRef };
}
