import { XMarkIcon } from "@heroicons/react/24/outline";

type XButtonProps = {
  screenReaderText?: string;
  onClick: () => void;
};

const XButton = ({ screenReaderText, onClick }: XButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {screenReaderText && <span className="sr-only">{screenReaderText}</span>}
      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
    </button>
  );
};

export default XButton;
