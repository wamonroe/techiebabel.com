import React from "react";
import { twMerge } from "tailwind-merge";

import { faDiceOne, faDiceThree, faDiceTwo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ActionIconProps = {
  sides: 1 | 2 | 3;
  available: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const ActionIcon = ({ sides, available, onClick }: ActionIconProps) => {
  const handleClick = () => {
    onClick((prev) => !prev);
  };

  const faDiceIcon = { 1: faDiceOne, 2: faDiceTwo, 3: faDiceThree }[sides];

  return (
    <button
      className={twMerge(
        "rounded-md bg-white",
        available ? "text-red-700 hover:text-red-600" : "text-gray-300 hover:text-gray-400"
      )}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faDiceIcon} size="4x" />
    </button>
  );
};

export default ActionIcon;
