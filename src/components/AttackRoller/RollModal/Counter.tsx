type CounterProps = {
  title: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

const Counter = ({ title, value, onDecrement, onIncrement }: CounterProps) => {
  return (
    <div className="flex-auto">
      <h4 className="text-sm font-semibold leading-6 text-gray-900">{title}</h4>
      <div className="mt-2 flex justify-center space-x-1">
        <button
          type="button"
          className="w-10 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={onDecrement}
        >
          -
        </button>
        <input
          type="text"
          className="block w-10 rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          disabled
        />
        <button
          type="button"
          className="w-10 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
