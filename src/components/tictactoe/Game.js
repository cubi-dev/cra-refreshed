import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helpers";

//  initialState = {}
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
// immutable
// [...arr] {...obj} : spread operator
// deep copy: JSON.parse(JSON.stringify(obj))
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      console.log(nextState);
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;

      return nextState;
    }
    case "RESET": {
      // Cách 1:
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
      // Cách 2: trả về initialState
      // return initialState;
    }

    default:
      console.log("Error: action type not found");
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = {type: 'CLICK', payload: {}}
  // dispatch(type: 'CLICK', payload: {})
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // })
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext
    // })
    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext);
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    dispatch({
      type: "RESET",
      payload: {},
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winner">
        {winner
          ? "Winner is " + winner
          : "Next player: " + (state.xIsNext ? "X" : "O")}
      </div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
