import { useContext } from "react";

import Button from "../Button";
import AttackRollerContext from "./AttackRollerContext";

type DiceButtonProps = {
  dice: string;
};

const DiceButton = ({ dice }: DiceButtonProps) => {
  const { openModal } = useContext(AttackRollerContext);

  return (
    <Button color="secondary" onClick={openModal(dice)} className="block w-full">
      {dice}
    </Button>
  );
};

export default DiceButton;
