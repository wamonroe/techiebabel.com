import { PropsWithChildren } from "react";

type ButtonProps = {
  color?: "primary" | "secondary" | "soft";
  onClick?: () => void;
};

const buttonColor = (color: ButtonProps["color"]) => {
  switch (color) {
    case "primary":
      return "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
    case "secondary":
      return "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
    case "soft":
      return "bg-indigo-50 text-indigo-600 hover:bg-indigo-100";
  }
};

const Button = ({
  color = "primary",
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      className={`rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm ${buttonColor(color)}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
