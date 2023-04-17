import "./style.css";

const Square = ({ onClick, value }) => (
  <button onClick={onClick} className="square">
    {value}
  </button>
);

export { Square };
