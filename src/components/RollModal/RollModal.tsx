import { useState } from "react";

import Content from "./Content";
import Modal from "../Modal";
import Result from "./Result";

import {
  attackRoll,
  AttackRollOptions,
  AttackRollResult,
} from "../../lib/dice";

type RollModalProps = {
  roll: string;
  open: boolean;
  onClose: (value: boolean) => void;
};

const RollModal = ({ roll, open, onClose: setOpen }: RollModalProps) => {
  const [result, setResult] = useState<AttackRollResult>();

  const handleClose = (value: boolean) => {
    setOpen(value);
    setResult(undefined);
  };

  const handleRoll = (options: AttackRollOptions) => {
    const result = attackRoll(roll, options);
    setResult(result);
  };

  const handleRollAgain = () => {
    setResult(undefined);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      {result ? (
        <Result roll={roll} result={result} onRollAgain={handleRollAgain} />
      ) : (
        <Content roll={roll} onRoll={handleRoll} />
      )}
    </Modal>
  );
};

export default RollModal;
