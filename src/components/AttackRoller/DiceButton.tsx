import { useContext } from "react";

import AttackRollerContext from "./AttackRollerContext";
import Button from "../Button";

type DiceButtonProps = {
  dice: string;
};

const DiceButton = ({ dice }: DiceButtonProps) => {
  const { openModal } = useContext(AttackRollerContext);

  return (
    <Button
      color="secondary"
      onClick={openModal(dice)}
      className="block w-full"
    >
      {dice}
    </Button>
  );
};

export default DiceButton;
