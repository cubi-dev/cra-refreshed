import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  // Array(9).fill(null) creates an array of 9 elements, each initialized to null
  // console.log(props);
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
