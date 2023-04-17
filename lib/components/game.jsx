import { useState } from "react";

import { Board } from "./board";
import { calculateWinner } from "../calculateWinner";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const gameFinised = !board.some((v) => v == null);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  const restart = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div className="flex flex-row gap-5 m-7 items-center">
        <div className="p-3 border rounded border-gray-600 bg-gray-100 font-sans">
          <p>
            {winner ? (
              <>
                <span className="underline">Winner</span> :{" "}
                <span className="font-extrabold">{winner}</span>
              </>
            ) : !gameFinised ? (
              <>
                <span>Next Player → </span>
                <span className="font-extrabold">{xIsNext ? "X" : "O"}</span>
              </>
            ) : (
              <span className="text-gray-500">End of Game ! </span>
            )}
          </p>
        </div>
        <div
          className="p-2 border rounded border-gray-600 bg-gray-100 font-sans m-1 cursor-pointer"
          onClick={restart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-rotate"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9e9e9e"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
          </svg>
        </div>
      </div>
    </>
  );
};

export { Game };
