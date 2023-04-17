import { Square } from "./square";

const Board = ({ squares, onClick }) => (
  <div className="border-4 border-blue-900 rounded-lg grid grid-cols-3 h-64 w-64">
    {squares.map((v, i) => (
      <Square key={i} value={v} onClick={() => onClick(i)} />
    ))}
  </div>
);

export { Board };
