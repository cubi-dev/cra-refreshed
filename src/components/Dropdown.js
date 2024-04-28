import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const {
    nodeRef: dropdownRef,
    setShow: setShowDropdown,
    show: showDropdown,
  } = useClickOutSide();

  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>

      {showDropdown && (
        <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
