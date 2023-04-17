const Square = ({onClick, value}) => (
	<button onClick={onClick} className="border-2 border-blue-900 bg-blue-100 text-xl cursor-pointer font-black">
        {value}
    </button>
);

export {Square};
