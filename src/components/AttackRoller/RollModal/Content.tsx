import { useContext } from "react";

import AttackRollerContext from "../AttackRollerContext";
import Button from "../../Button";
import Counter from "./Counter";
import DiceIcon from "./DiceIcon";
import Modal from "../../Modal";

const Content = () => {
  const {
    adv,
    decrementAdv,
    decrementDis,
    dice,
    dis,
    handleRoll,
    incrementAdv,
    incrementDis,
  } = useContext(AttackRollerContext);

  return (
    <>
      <Modal.Content>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <DiceIcon />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Modal.Title>{dice} Attack</Modal.Title>
          <div className="mt-2 flex">
            <Counter
              title="Advantage"
              value={adv}
              onIncrement={incrementAdv}
              onDecrement={decrementAdv}
            />
            <Counter
              title="Disadvantage"
              value={dis}
              onIncrement={incrementDis}
              onDecrement={decrementDis}
            />
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button className="w-full" onClick={handleRoll}>
          Roll
        </Button>
      </Modal.Actions>
    </>
  );
};

export default Content;
