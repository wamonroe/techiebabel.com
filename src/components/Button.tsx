import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  color?: "primary" | "secondary" | "soft";
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const buttonColor = (color: ButtonProps["color"]) => {
  switch (color) {
    case "primary":
      return "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";
    case "secondary":
      return "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
    case "soft":
      return "bg-blue-50 text-blue-600 hover:bg-blue-100";
  }
};

const buttonSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "xs":
      return "px-2 py-1 text-xs";
    case "sm":
      return "px-2 py-1 text-sm";
    case "md":
      return "px-2.5 py-1.5 text-sm";
    case "lg":
      return "px-3 py-2 text-sm";
  }
};

const Button = ({
  color = "primary",
  size = "md",
  className,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      className={twMerge(
        "rounded-md font-semibold shadow-sm",
        buttonColor(color),
        buttonSize(size),
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
