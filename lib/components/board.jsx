import { Square } from "./square";

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((v, i) => (
      <Square key={i} value={v} onClick={() => onClick(i)} />
    ))}
  </div>
);

export { Board };
